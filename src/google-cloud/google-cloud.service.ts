import { hostname } from "node:os"
import { Firestore } from "@google-cloud/firestore"
import { Injectable, OnModuleInit } from "@nestjs/common"

@Injectable()
export class GoogleCloudService implements OnModuleInit {
	async onModuleInit(): Promise<void> {
		const firestore = new Firestore()
		const document = firestore.doc(`machines/${hostname()}`)
		await document.set({
			bootedAt: new Date(),
		})
		console.log("hello from google cloud service", firestore)
		console.log(await document.get())
	}
}
