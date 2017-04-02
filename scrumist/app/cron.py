from pyflock import FlockClient, Message, SendAs
import pymongo

def main():
	token = "60c23d3a-fe48-4390-b08c-174dcc94d8ce"
	APP_ID = "ce53926d-4cbc-413b-be4d-fecfsks4bdea06d"
	flockClient = FlockClient(token, APP_ID)
	mongo = pymongo.MongoClient("mongodb://localhost")
	db = mongo["flockathon"]
	tasks = db.subtasks.find()
	for task in tasks:
		user = flockClient.get_user_info()
		send_as_master = SendAs(name='Scrum-Master', profile_image=user["profileImage"])
		message_text = "Please update your status on " + task["name"]
		msg = Message(to=task["user"], text=message_text, send_as=send_as_master)
		print "sending ", message_text
		flockClient.send_chat(msg)

if __name__ == '__main__':
	main()

