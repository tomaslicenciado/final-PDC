package beans;

import java.util.List;
import java.util.ArrayList;

public class CarrerasBean {
	private String carreraSeleccionada;
	private List<String> lista;
	private int index;
	
	public CarrerasBean() {
		this.lista = new ArrayList<String>();
		this.lista.add("Informática");
		this.lista.add("Telecomunicaciones");
		this.lista.add("Química");
	}
	
	public List<String> getCarreras(){
		return lista;
	}
	
	public String getCarrera() {
		return this.lista.get(index);
	}
	
	public void setIndex(int i) {
		this.index = i;
	}
}
