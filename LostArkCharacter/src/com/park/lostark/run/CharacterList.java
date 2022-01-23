package com.park.lostark.run;

import java.util.ArrayList;
import com.park.lostark.data.Character;

public class CharacterList {

		public void run(ArrayList<Character> characters) {
			
				for(Character c : characters) {
					c.info();
				}
		}
}
