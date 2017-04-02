import pymongo


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

	def createTask(self, data):
		subtasks = []
		for item in data:
			subTaskId = self.createSubtask(item).inserted_id
			if subTaskId != -1:
				subtasks.append(subTaskId)
		return subtasks

	def createGroup(self, data):
		groupDetails = {}
		groupDetails["groupid"] = data["groupid"]
		groupDetails["name"] = data["name"]
		groupDetails[""]

	def createSprint(self, data):
		sprintDetails = {}
		sprintDetails["name"] = data["name"]
		sprintDetails["created_on"] = data["created_on"]
		sprintDetails["expiry"] = data["expiry"]
		sprintDetails["master_id"] = data["master_id"]
		sprintDetails["tasks"] = createTask(data["tasks"])
		try:
			sprintId = self.sprints.insert_one(sprintDetails).inserted_id
			self.addSprintToGroup(data["groupid"], sprintId)
			return True
		except:
			return -1

	def createGroup(self, groupId, sprintId):
		groupDetails = {}
		groupDetails["groupId"] = groupId
		groupDetails["sprints"] = [sprintId]
		groupDetails["activesprint"] = sprintId
		self.groups.insert_one(groupDetails)

	def createSubtask(self, data):
		subtaskDetails = {}
		subtaskDetails["name"] = data["name"]
		subtaskDetails["desc"] = data["desc"]
		subtaskDetails["user"] = data["user"]
		subtaskDetails["completed"] = 0 
		try:
			subtaskId = self.subtasks.insert_one(subtaskDetails).inserted_id
			return subtaskId
		except:
			return -1

	def addSprintToGroup(self, groupId, sprintId):
		group = self.getGroup(groupId)
		if group is None :
			self.createGroup(groupId, sprintId)
		else:
			sprints = group["sprints"]
			sprints.add(sprintId)
			self.groups.update({'_id':group['_id']},{"$set":{'sprints':sprints}})
			self.groups.update({'_id':group['_id']},{"$set":{'activesprint':sprintId}})

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

	def getGroup(self, groupId):
		try:
			group = self.groups.find_one({"groupid" : groupId})
			return group
		except :
			return None

	def getSprint(self, sprintId):
		try:
			sprint = self.sprints.find_one({"_id": ObjectId(sprintId)})
			return sprint
		except:
			return None

	def getTask(self, taskId):
		try:
			task = self.sprints.find_one({"_id": ObjectId(staskId)})
			return task
		except:
			return None

	def getSubTask(self, subTaskId):
		try:
			subTask = self.subtasks.find_one({"_id": ObjectId(subTaskId)})
			return subTask
		except:
			return None

	def getClient(self):
		return self.conn
