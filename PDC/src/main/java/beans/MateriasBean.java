package beans;

import java.util.List;
import java.util.ArrayList;

public class MateriasBean {
	private int index;
	private List<String> lista;
	private String carrera;
	
	public MateriasBean() {
		lista = new ArrayList<String>();
	}

	public int getIndex() {
		return index;
	}

	public void setIndex(int index) {
		this.index = index;
	}

	public List<String> getMaterias() {
		return lista;
	}

	public void setMaterias(List<String> lista) {
		this.lista = lista;
	}
	
	public String getMateria() {
		return lista.get(index);
	}
	
	public void setCarrera(String carrera) {
		lista.clear();
		this.index = 0;
		if (carrera.equals("Informática")) {
			lista.add("PDC");
			lista.add("TC");
			lista.add("SI");
			lista.add("IS-II");
			lista.add("PTI");
		}
		if (carrera.equals("Telecomunicaciones")) {
			lista.add("FIII");
			lista.add("MDIII");
			lista.add("OPT-II");
			lista.add("EI");
			lista.add("LABII");
		}
		if (carrera.equals("Química")) {
			lista.add("QIV");
			lista.add("LABIII");
			lista.add("FIII");
			lista.add("AMIII");
			lista.add("EI");
		}
	}
}
