import os
import numpy
import pandas as pd

from flask import Flask, render_template
app = Flask(__name__)

def search(path):
    file_list = os.listdir(path)
    
    file_path_list = []
    for file_name in file_list:
        file_path = os.path.join(path, file_name)
        file_path_list.append(file_path)
    
    return file_path_list

@app.route('/')
def index():
    testData = 'testData array'
    return render_template('main.html', testDataHtml=testData)

@app.route('/chart')
def info():
    data_file_path = search('data/')
    
    data_list = []
    file_list = []
    for file_path in data_file_path:
        file_name = file_path.split('/')[1]
        file_name = file_name.split('.')[0]
        file_list.append(file_name)
        data_list.append(pd.read_csv(file_path))
    
    for data in data_list:
        data_columns = []
        for columns_name in data.columns:
            data_columns.append(columns_name)
            
            
    return render_template('chart.html')

if __name__ == '__main__':
    app.run()