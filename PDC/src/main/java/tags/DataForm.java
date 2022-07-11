package tags;

import jakarta.servlet.jsp.JspException;
import jakarta.servlet.jsp.PageContext;
import jakarta.servlet.jsp.tagext.Tag;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DataForm implements Tag {
	private PageContext contexto;
	private Tag padre;

	@Override
	public int doEndTag() throws JspException {
		try {
			LocalDateTime fecha = LocalDateTime.now();
			DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
			String fechaYHora = fecha.format(formato);
			contexto.getOut().write(fechaYHora);
		} catch(java.io.IOException e) {
			throw new JspException("Error"); 
		}
		return EVAL_PAGE;
	}

	@Override
	public int doStartTag() throws JspException {
		return SKIP_BODY;
	}

	@Override
	public Tag getParent() {
		return this.padre;
	}

	@Override
	public void release() {
	}

	@Override
	public void setPageContext(PageContext arg0) {
		this.contexto = arg0;

	}

	@Override
	public void setParent(Tag arg0) {
		this.padre = arg0;
	}

}
