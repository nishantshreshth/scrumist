from app import app
from dbhandler import DBHandler
from pyflock import FlockClient
from config import APP_ID
from flask import Flask, render_template, make_response,request, redirect, jsonify

dbHandler = DBHandler()

@app.route('/api/groups', methods = ["GET"])
def getUsers():
	userId = request.args.get('userid')
	user = dbHandler.getUser(userId)
	response = {}
	if user:
		token = user["token"]
		flockClient = FlockClient(token, APP_ID)
		userInfo = flockClient.get_user_info()
		response["username"] = userInfo["firstName"]
		response["userid"] = userId
		response["image"] = userInfo["profileImage"]
		response["groups"] = flockClient.get_groups()
		return jsonify(response), 200
	else:
		return jsonify(response), 200

@app.route('/api/sprint', methods = ["POST"])
def createSprint():
	sprintInfo = {}
	taskInfo = {}
	data = request.data
	sprintData = json.loads(data)
	sprintInfo = {}
	return "ok"

