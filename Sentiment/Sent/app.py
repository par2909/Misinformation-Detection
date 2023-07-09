from flask import Flask, render_template


app = Flask(__name__)


from timing import timing 

app.register_blueprint(timing)



if __name__=="__main__":
    app.run(debug=True)
    