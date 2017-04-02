from app import app
import json
import time
import ast
from random import random
from flask import Flask, render_template, make_response,request, redirect
from dbhandler import DBHandler
dbHandler = DBHandler()

@app.route('/', methods = ["GET"])
def home():
	#getContent = request.args
	#event = ast.literal_eval(getContent.get("flockEvent"))
	#userId = event["userId"]
	response = make_response(render_template("index.html"))
	#response.headers.set('userId', userId)
	return response

@app.route('/open', methods = ["GET"])
def install():
	getContent = request.args
	event = ast.literal_eval(getContent.get("flockEvent"))
	userId = event["userId"]
	response = make_response("HELLO")
	response.headers.set('userId', userId)
	return response

@app.route('/open', methods = ["POST"])
def open():
	data = request.data
	dataDict = json.loads(data)
	action = dataDict["name"]
	userId = dataDict["userId"]
	status = False
	print dataDict
	if(action.lower() == "app.uninstall"):
		status = dbHandler.deleteUser(userId)
	if(action.lower() == "app.install"):
		userToken = dataDict["token"]
		status = dbHandler.createUser(userId, userToken)
	if status :
		return str(status), 200
	else :
		return str(status), 400
