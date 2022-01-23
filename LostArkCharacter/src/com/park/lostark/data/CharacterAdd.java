package com.park.lostark.data;

import java.util.ArrayList;
import java.util.Scanner;

public class CharacterAdd {

		public void run(ArrayList<Character> characters) {
			String name;
			String job;
			String level;
			String itemlevel;
			String gakin;
			
			Scanner sc = new Scanner(System.in);
			System.out.print("닉네임:");
			name = sc.next();
			System.out.print("직업:");
			job = sc.next();
			System.out.print("레벨:");
			level = sc.next();
			System.out.print("템렙:");
			itemlevel = sc.next();
			System.out.print("각인:");
			gakin = sc.next();
			characters.add(new Character(name, job, level, itemlevel, gakin));
			System.out.println("추가 완료");
		}
}
