import pandas as pd
from flask import Flask, render_template, request
app = Flask(__name__)

data_path = 'data/'

@app.route('/', methods=['GET', 'POST'])
def index():
    file=''
    # category=''
    
    if request.method == 'POST':
        file = request.form['file']
        # category = request.form['category']
        print(file)
    
    #if file != '':
        #data = pd.read_csv(data_path + file + '.csv')
        # time = data['Time']
        # value = data[category]
        
    return render_template('test.html', file=file)

if __name__ == '__main__':
    app.run()