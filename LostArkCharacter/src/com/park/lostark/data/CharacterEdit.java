package com.park.lostark.data;

import java.util.ArrayList;
import java.util.Scanner;

public class CharacterEdit {

		public void run(ArrayList<Character> characters) {
			Scanner sc = new Scanner(System.in);
			System.out.print("수정할 캐릭터이름:");
			String editInfo = sc.next();
			int search =-1;
			
			for(int i=0; i<characters.size(); i++) {
				if(characters.get(i).getName().equals(editInfo)) {
					search = i;
					break;
				}
			}
			
			if(search == -1) {
				System.out.println("그런 캐릭터는 없습니다, 닉네임을 확인해주세요.");
			}else {
				System.out.print("변경할 레벨 입력:");
				String level = sc.next();
				System.out.print("변경할 템렙 입력:");
				String itemlevel = sc.next();
				System.out.print("변경할 각인 입력:");
				String gakin = sc.next();
				
				Character c = characters.get(search);
				c.setLevel(level);
				c.setItemlevel(itemlevel);
				c.setGakin(gakin);
				System.out.println("수정 완료");
				}
		}
}
