package com.park.lostark.data;

public class Character {

		private String name;
		private String job;
		private String level;
		private String itemlevel;
		private String gakin;
		
	public Character(String name, String job, String level, String itemlevel, String gakin) {
		this.name = name;
		this.job = job;
		this.level = level;
		this.itemlevel = itemlevel;
		this.gakin = gakin;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getItemlevel() {
		return itemlevel;
	}

	public void setItemlevel(String itemlevel) {
		this.itemlevel = itemlevel;
	}

	public String getGakin() {
		return gakin;
	}

	public void setGakin(String gakin) {
		this.gakin = gakin;
	}
	
	public void info() {
		System.out.println("<" + name + "> " + job + "(" + level + ") /" + itemlevel + "/ " + gakin);
	}
}



