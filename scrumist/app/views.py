from app import app
import json
import time
from random import random
from flask import Flask, render_template, make_response,request, redirect

@app.route('/', methods = ['GET', "POST"])
def home():
	return "Hello Scrumist"