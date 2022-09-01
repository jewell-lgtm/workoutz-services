import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
	getHello(): string {
		const hours = new Date().getUTCHours()
		if (hours > 4) {
			if (hours < 12) {
				return "Good Morning!"
			}
			if (hours < 18) {
				return "Good Afternoon!"
			}
			if (hours < 23) {
				return "Good Evening!"
			}
		}
		return "Good Night!"
	}
}
