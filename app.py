from flask import Flask, render_template, send_from_directory

import os


print(__name__)
app = Flask('owrel.fr',)


@app.route("/")
@app.route("/index")
def index():
	return render_template("index.html")


@app.route("/projects")
def projects():
	return render_template("projects.html")

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static/img'),
                               'hand.ico', mimetype='image/vnd.microsoft.icon')





app.run(debug=True)