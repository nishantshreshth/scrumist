import pymongo
from flockclient import FlockClient

class DBHandler:

	def __init__(self):
		self.conn =  pymongo.MongoClient("mongodb://localhost")
		self.db = self.conn['flockathon']
		self.users = self.db.users
		self.groups = self.db.groups
		self.tasks = self.db.tasks
		self.subtasks = self.db.subtasks
		self.sprints = self.db.sprints

	def createUser(self, userId, userToken):
		userDetails = {}
		userDetails["userid"] = userId
		userDetails["token"] = userToken
		try:
			self.users.insert_one(userDetails)
			return True
		except:
			return False

	def deleteUser(self, userId):
		try :
			self.users.delete_one({"userid" : userId})
			print "Deleted"
			return True
		except:

			return False

	def getUser(self, userId):
		try:
			user = self.users.find_one({"userid" : userId})
			return user
		except:
			return None



	def getUsertasks(userId):
		pass

	def getClient(self):
		pass


