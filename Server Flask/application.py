
#Parti Modele

import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pickle





#Parti web service 
from flask import Flask

from flask.ext.cors import CORS, cross_origin
from flask import request

import sys, json
app = Flask(__name__)

@app.route("/api/pridect", methods=["POST"])
def hello():
	
	data = request.get_json()
	a = data['a']
	b = data['b']
	c = data['c']
	d = data['d']
	e = data['e']

	loaded_model = pickle.load(open('./finalized_model.sav', 'rb'))
	print('modeeeeeeeeeeeeel')

	predict = {};
	for i in range(0,len(a)):
		donneesApredire = [[int(a[i]), int(b[i]), int(c[i]), int(d[i]), int(e[i])]];
		probaClasses = loaded_model.predict(donneesApredire)
		print("<======================>");
		print(probaClasses);
		predict.update({i: probaClasses.tolist()})

	
	print(predict);
 
	return (json.dumps(predict)) ;
	



if __name__ == '__main__':
    app.run(debug=True)