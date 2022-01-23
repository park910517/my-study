package com.park.lostark;

import java.util.ArrayList;
import java.util.Scanner;

import com.park.lostark.data.Character;
import com.park.lostark.data.CharacterAdd;
import com.park.lostark.data.CharacterDel;
import com.park.lostark.data.CharacterEdit;
import com.park.lostark.display.Title;
import com.park.lostark.run.CharacterList;



public class LostArk {

		void run() {
			System.out.println(Title.TITLE);
			
			ArrayList<Character> characters = new ArrayList<Character>();
			characters.add(new Character("민트초코블라스터", "블래스터", "60", "1480", "원3예3저3타3화3"));
			characters.add(new Character("호엥금", "바드", "60", "1445", "절3각3전3중3구1"));
			characters.add(new Character("호빵앙금", "디스트로이어", "60", "1415", "원3바3슈3분3정1"));
			characters.add(new Character("호앵금", "창술사", "60", "1415", "원3예3절3질3중1"));
			characters.add(new Character("워로드가바닥에눕지를않아", "워로드", "60", "1415", "원3바3저3정3전1"));
			characters.add(new Character("이젠내가클래식한마법사다", "소서리스", "60", "1415", "원3속3타3점3중1"));
			characters.add(new Character("변신할땐개도안건드리는데", "스카우터", "60", "1415", "원3바3돌3아3진1"));
			characters.add(new Character("나는야미대수석출신도아가", "도화가", "52", "1415", "만개3각성3"));
			characters.add(new Character("뎀모닉데모닉굿모닝헤프닝", "데모닉", "51", "1340", "원3중2충1"));
			
			boolean isNotEnd = true;
			Scanner sc = new Scanner(System.in);
			while(isNotEnd) {
				System.out.print("명령어 입력(1.캐릭터목록 2.캐릭터추가 3.캐릭터수정 4.캐릭터삭제 e종료):");
				String cmd = sc.next();
				switch(cmd) {
				case "1":
					CharacterList characterlist = new CharacterList();
					characterlist.run(characters);
					System.out.println("");
					break;
				case "2":
					CharacterAdd characteradd = new CharacterAdd();
					characteradd.run(characters);
					System.out.println("");
					break;
				case "3":
					CharacterEdit characteredit = new CharacterEdit();
					characteredit.run(characters);
					System.out.println("");
					break;
				case "4":
					CharacterDel characterdel = new CharacterDel();
					characterdel.run(characters);
					System.out.println("");
				case "e":
					listEnd();
					isNotEnd = false;
					return;
				}
			}
			
		}
		
		void listEnd() {
			System.out.println("프로그램 종료");
		}
}
