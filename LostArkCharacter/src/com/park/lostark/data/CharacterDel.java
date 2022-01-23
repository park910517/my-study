package com.park.lostark.data;

import java.util.ArrayList;
import java.util.Scanner;

public class CharacterDel {

		Scanner sc = new Scanner(System.in);
		public void run(ArrayList<Character> characters) {
			System.out.print("삭제할 캐릭터 닉네임 입력:");
			String delName = sc.next();
			for(int i=0; i<characters.size(); i++) {
				if(characters.get(i).getName().equals(delName)) {
					characters.remove(i);
					System.out.println("삭제 완료");
				}
			}
		}
}
