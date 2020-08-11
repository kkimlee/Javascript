import os
import csv
import json
import numpy
import pandas as pd

from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

data_path = 'data/'

file=''
data = ''
category = 'Va'

@app.route('/', methods=['GET', 'POST'])
def index():
    print('index')
    return render_template('index.html', data=[0, 0, 0, 0])

@app.route('/getData', methods=['GET', 'POST'])
def getData():
    print('getdata')
    global category
    global file
    global data
    
    if request.method == 'POST':
        key = list(request.form.to_dict().keys())
        
        if key[0] == 'file':
            file = request.form[key[0]]
        elif key[0] == 'category':
            category = request.form[key[0]]
    
    if file != '':
        data = pd.read_csv(data_path+file+'.csv')[category]
        data =data.to_json(orient='split')
        json_data = json.loads(data)
        index = json_data['index']
        value = json_data['data']
        json_data = {'category':category, 'index':index, 'value':value}

    return json_data

if __name__ == '__main__':
    app.run()