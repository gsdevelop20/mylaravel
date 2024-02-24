<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('site/style.css') }}">
    <link rel="stylesheet" href="{{ asset('site/login.css') }}">
    <title>LOGIN</title>
</head>
<body class="gradient-custom">
<section class="vh-100">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card p-6 bg-dark text-white" style="border-radius: 2rem;">
                    <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4 pb-5">

                            <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                            <p class="text-white-50 mb-5">Entre com seu login e senha!</p>

                            <div class="form-outline form-white mb-4">
                                <label class="form-label" for="typeEmailX">Email</label>
                                <input type="email" id="typeEmailX" class="form-control bg-dark text-white form-control-lg" />
                            </div>

                            <div class="form-outline form-white mb-4">
                                <label class="form-label" for="typePasswordX">Senha</label>
                                <input type="password" id="typePasswordX" class="form-control bg-dark text-white forms form-control-lg" />
                            </div>

                            <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Esqueceu a senha?</a></p>

                            <button class="btn btn-outline-light btn-lg px-5" type="submit">Entrar</button>

                            <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                            </div>

                        </div>

                        <div>
                            <p class="mb-0">Não tem uma conta? <a href="#" class="text-white-50 fw-bold">Inscreva-se</a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<script src = '{{ asset('site/jquery.js') }}'></script>
<script src = '{{ asset('site/bootstrap.js') }}'></script>
</body>
</html>
