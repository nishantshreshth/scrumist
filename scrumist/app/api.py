from app import app
import json
from dbhandler import DBHandler
from pyflock import FlockClient
from config import APP_ID
from flask import Flask, render_template, make_response,request, redirect, jsonify
from flask_cors import CORS, cross_origin
from bson.objectid import ObjectId

dbHandler = DBHandler()

@app.route('/api/groups', methods = ["GET"])
def getUsers():
	userId = request.args.get('userid')
	print request.args
	user = dbHandler.getUser(userId)
	response = {}
	if user:
		token = user["token"]
		flockClient = FlockClient(token, APP_ID)
		userInfo = flockClient.get_user_info()
		response["username"] = userInfo["firstName"]
		response["userid"] = userId
		response["userimage"] = userInfo["profileImage"]
		response["groups"] = flockClient.get_groups()
		resp = make_response(jsonify(response))
		resp = make_response(jsonify(response))
		resp.headers.set("Access-Control-Allow-Origin", '*')
		return resp, 200
	else:
		return jsonify(response), 200

@app.route('/api/sprint', methods = ["GET"])
def getSprint():
	flockClient = None
	groupId = request.args.get('grouid')
	userId = request.args.get('userid')
	user = dbHandler.getUser(userId)
	group = dbHandler.getGroup(groupId)
	resp = {}
	resp["type"] = "create"
	resp["groupid"] = groupId
	resp["userid"] = userId
	resp["name"] = None
	resp["createdon"] = None
	resp["expiry"] = None
	resp["tasks"] = None
	resp["members"] = None
	resp["ismaster"] = False
	if not user :
		return resp, 403
	else:
		token = user["token"]
		flockClient = FlockClient(token, APP_ID)
		resp[members] = flockClient.get_group_members()
	if not group :
		resp = make_response(jsonify(response))
		resp.headers.set("Access-Control-Allow-Origin", '*')
		return resp, 200
	else:
		activeSprint = group["activeSprint"]
		if ((activeSprint is None) or activeSprint.trim() == ""):
			resp = make_response(jsonify(response))
			resp.headers.set("Access-Control-Allow-Origin", '*')
			return resp, 200
		else:
			sprint = dbHandler.getSprint(activeSprint)
			resp["tasks"] = []
			taskList = sprint["tasks"]
			for taskId in taskList:
				taskDict = {}
				task = dbHandler.getTask(taskId)
				taskDict["name"] = task["name"]
				subtasks = []
				subTaskLists = task["subtasks"]
				for item in subTaskLists:
					subtasks.append(dbHandler.getSubTask(item))
				taskDict["subtasks"] = subtasks
				resp["tasks"].append(taskDict)

			resp = make_response(jsonify(response))
			resp.headers.set("Access-Control-Allow-Origin", '*')
			return resp, 200

@app.route('/api/sprint', methods = ["OPTIONS", "POST"])
@cross_origin();
def createSprint():
	if request.method == "POST":
		data = request.data
		dataDict = json.loads(data)
		print dataDict
	resp = make_response()
	resp.headers.set('Access-Control-Allow-Origin: *');
	resp.headers.set('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
	resp.headers.set('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');	
	print resp, 200





