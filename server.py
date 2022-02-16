from flask import Flask, render_template
app = Flask(__name__)
from openpyxl import Workbook
from openpyxl import load_workbook
import json

si = "Β5"

wb = load_workbook("test.xlsx", data_only=True)
ws1 = wb["Εκπαιδευτικοί"]

lastRow = 73
lastColumn = 36

# 2-8 its monday
# 9-15 its tuesday
# 16-22 its wednesday
# 23-29 its thursday
# 30-36 its friday

def mainFunction():
        
    ls0 = []
    ls1 = []
    ls2 = []
    ls3 = []
    ls4 = []
    count = 0

    for i in range(1, 73): # Row indexing
        for o in range(1, 37): # Column indexing
            if(ws1.cell(row=i, column=o).value == si):
                lC = i-1
                hour = ws1.cell(row=3, column=o).value
                lesson = ws1.cell(row=lC, column=o).value
                if o >= 2 and o<=8:
                    day = 0
                elif o >=9 and o<=15:
                    day = 1
                elif o >=16 and o<=22:
                    day = 2
                elif o >=23 and o<=29:
                    day = 3
                elif o >=30 and o<=36:
                    day = 4
                obj = {
                    "lesson": lesson,
                    "day": day,
                    "hour": hour
                }
                if day==0:
                    ls0.append(obj)
                elif day==1:
                    ls1.append(obj)
                elif day==2:
                    ls2.append(obj)
                elif day==3:
                    ls3.append(obj)
                elif day==4:
                    ls4.append(obj)
                count +=1


        print(count)
        print(ls0)
        print(ls1)
        print(ls2)
        print(ls3)
        print(ls4)


@app.route('/')
def index():
  return render_template('index.html')

@app.route('/run')
def my_link():
  print ('I got clicked!')
  mainFunction()

  return 'Click.'

if __name__ == '__main__':
  app.run(debug=True)

