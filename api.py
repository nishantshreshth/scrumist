from app import app
import json
import time
from random import random
from flask import Flask, render_template, make_response,request, redirect

@app.route('/create/task', methods = ["POST"])
def createTask():
	if request.Method == "POST" :
		data  = request.get_json()
	if 
		