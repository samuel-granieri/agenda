from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"


@app.route("/register", methods=['POST'])
def register():
    if request.method == 'POST':
        
        usuario_db = 'Samuel'
        senha_db = '12345'
  
        #Checar usuario e senhas vazio
        # if http://127.0.0.1:5000 == '' or request.json['password'] == '':
        #     data = {'status': 'Usuário ou senha devem ser preenchidos'}
        #     return data
        
        #Checar usuario cadastrado
        # if request.json['user'] != usuario_db:
        #     data = {'status': 'Usuário ou senha incorretos!'}
        #     return data
        
        #Checar usuario e senha estao corretos
        # if request.json['user'] != usuario_db or request.json['password'] != senha_db:
        #     data = {'status': 'Usuário ou senha incorretos!'}
        #     return data
        
        data = {
            'name': request.json['name'],
            'email': request.json['email'],
            'password': request.json['password'],
        }
        
        # else:
        #     data = {'status': 'Sucesso'}
        #     return data
        
        return data
        
        
        
    
    
    
if __name__ == "__main__":
    app.run(debug=True)