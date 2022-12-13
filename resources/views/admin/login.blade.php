@extends('layouts.base')
@section('body')

    <head>
        <meta name="google-signin-client_id"
            content="120405037620-lum8mjkpd3v61jv526v6t9ehkfib657k.apps.googleusercontent.com">
    </head>

    <style>
        body {
            min-height: 100%;
            background: linear-gradient(to bottom, #c1c4c4, #bac5c5, #b3c5c7, #acc6c9, #a4c6cb, #9ec5cb, #97c5cb, #90c4cb, #89c3c7, #83c1c3, #7dc0bf, #77beba) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        .cont {
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            width: 900px;
            height: 830px;
            margin: 0 auto 100px;
            background: white;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }

        .formlog {
            position: relative;
            width: 640px;
            height: 100%;
            margin-top: 190px;
            margin -webkit-transition: -webkit-transform 1.2s ease-in-out;
            transition: -webkit-transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
            padding: 50px 30px 0;
        }

        .sub-cont {
            overflow: hidden;
            position: absolute;
            left: 640px;
            top: 0;
            width: 900px;
            height: 100%;
            padding-left: 260px;
            background: #fff;
            -webkit-transition: -webkit-transform 1.2s ease-in-out;
            transition: -webkit-transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
        }

        .cont.s--signup .sub-cont {
            -webkit-transform: translate3d(-640px, 0, 0);
            transform: translate3d(-640px, 0, 0);
        }

        button {
            display: block;
            margin: 0 auto;
            width: 260px;
            height: 36px;
            border-radius: 30px;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
        }

        .img {
            overflow: hidden;
            z-index: 2;
            position: absolute;
            left: 0;
            top: 0;
            width: 260px;
            height: 100%;
            padding-top: 360px;
        }

        .img:before {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            width: 900px;
            height: 100%;
            opacity: .8;
            background-size: cover;
            -webkit-transition: -webkit-transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
        }

        .img:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
        }

        .cont.s--signup .img:before {
            -webkit-transform: translate3d(640px, 0, 0);
            transform: translate3d(640px, 0, 0);
        }

        .img__text {
            z-index: 2;
            position: absolute;
            left: 0;
            top: 50px;
            width: 100%;
            padding: 0 20px;
            text-align: center;
            color: #fff;
            -webkit-transition: -webkit-transform 1.2s ease-in-out;
            transition: -webkit-transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out;
            transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;
        }

        .img__text h2 {
            margin-bottom: 10px;
            font-weight: normal;
        }

        .img__text p {
            font-size: 14px;
            line-height: 1.5;
        }

        .cont.s--signup .img__text.m--up {
            -webkit-transform: translateX(520px);
            transform: translateX(520px);
        }

        .img__text.m--in {
            -webkit-transform: translateX(-520px);
            transform: translateX(-520px);
        }

        .cont.s--signup .img__text.m--in {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }

        .img__btn {
            overflow: hidden;
            z-index: 2;
            position: relative;
            width: 100px;
            height: 36px;
            margin: 0 auto;
            background: transparent;
            color: #fff;
            text-transform: uppercase;
            font-size: 15px;
            cursor: pointer;
        }

        .img__btn:after {
            content: '';
            z-index: 2;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border: 2px solid #fff;
            border-radius: 30px;
        }

        .img__btn span {
            position: absolute;
            left: 0;
            top: 0;
            display: -webkit-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            width: 100%;
            height: 100%;
            -webkit-transition: -webkit-transform 1.2s;
            transition: -webkit-transform 1.2s;
            transition: transform 1.2s;
            transition: transform 1.2s, -webkit-transform 1.2s;
        }

        .img__btn span.m--in {
            -webkit-transform: translateY(-72px);
            transform: translateY(-72px);
        }

        .cont.s--signup .img__btn span.m--in {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        .cont.s--signup .img__btn span.m--up {
            -webkit-transform: translateY(72px);
            transform: translateY(72px);
        }

        h2 {
            width: 100%;
            font-size: 26px;
            text-align: center;
        }

        label {
            display: block;
            width: 260px;
            margin: 25px auto 0;
            text-align: center;
        }

        label span {
            font-size: 12px;
            color: #cfcfcf;
            text-transform: uppercase;
        }

        input {
            display: block;
            width: 100%;
            margin-top: 5px;
            padding-bottom: 5px;
            font-size: 16px;
            border-top-style: hidden;
            border-right-style: hidden;
            border-left-style: hidden;
            border-bottom-style: groove;
            text-align: center;
        }

        .forgot-pass {
            margin-top: 15px;
            text-align: center;
            font-size: 12px;
            color: #cfcfcf;
        }

        .submit {
            margin-top: 40px;
            margin-bottom: 20px;
            background: #7ad1d4;
            text-transform: uppercase;
        }

        .fb-btn {
            border: 2px solid #d3dae9;
            color: #8fa1c7;
        }

        .fb-btn span {
            font-weight: bold;
            color: #455a81;
        }

        .sign-in {
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }

        .cont.s--signup .sign-in {
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: ease-in-out;
            -webkit-transition-duration: 1.2s;
            transition-duration: 1.2s;
            -webkit-transform: translate3d(640px, 0, 0);
            transform: translate3d(640px, 0, 0);
        }

        .sign-up {
            -webkit-transform: translate3d(-900px, 0, 0);
            transform: translate3d(-900px, 0, 0);
        }

        .cont.s--signup .sign-up {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    </style>

    <body>

        <br>
        <br>
        <div class="cont">
            <div class="formlog sign-in">
                <form action="" id="loginForm" enctype="multipart/form-data">
                    <h2>Welcome</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" name="email" id="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" name="pass" id="pass" />
                    </label>
                    <button type="button" class="submit" id="loginSubmit">Sign In</button>
                </form>


                <div class="row">
                    {{-- <div class="col-sm-5 col-md-6 justify-content-end d-flex">
                        <div id="loginGoogle" class="g-signin2"></div>
                    </div>
                    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <div id="loginFacebook" class="fb-login-button" data-width="120" data-size="large" data-button-type="login_with"
                            data-layout="default" data-auto-logout-link="true" data-use-continue-as="true"></div>
                    </div> --}}
                    <div style="padding-bottom: 10px">
                        <a href="">
                        <button id="loginGoogle" >
                            <img src="img/google.png" width="15" style="padding-bottom: 10px" alt="" className="icon" />
                            
                        </button>
                        </a>

                    </div>
                    <div>
                        <button id="loginFacebook">
                            <img src="img/facebook.png" width="15" style="padding-bottom: 10px" alt="" className="icon" />
                            
                        </button>

                    </div>

                </div>

                {{-- <script>
                    function signOut() {
                        var auth2 = gapi.auth2.getAuthInstance();
                        auth2.signOut().then(function() {
                            console.log('User signed out.');
                        });
                    }
                </script> --}}

                {{-- <script>
                    function onSignIn(googleUser) {
                        var profile = googleUser.getBasicProfile();
                        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
                        console.log('Name: ' + profile.getName());
                        console.log('Image URL: ' + profile.getImageUrl());
                        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
                    }
                </script> --}}

                {{-- <div id="fb-root"></div>
                <script async defer crossorigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0&appId=703883347717377&autoLogAppEvents=1"
                    nonce="MurbXqMI"></script> --}}

            </div>
            <div class="sub-cont">
                <div class="img">
                    <div class="img__text m--up">

                        <h3>Don't have an account? Please Sign up!<h3>
                    </div>
                    <div class="img__text m--in">

                        <h3>If you already has an account, just sign in.<h3>
                    </div>
                    <div class="img__btn">
                        <span class="m--up">Sign Up</span>
                        <span class="m--in">Sign In</span>
                    </div>
                </div>
                <div class="formlog sign-up" style="margin-top: 0 !important;">
                    <form action="" id="registerForm" enctype="multipart/form-data">
                        <h2>Create Your Account</h2>
                        <label>
                            <span>First Name</span>
                            <input type="text" name="fname" id="fname" />
                        </label>
                        <label>
                            <span>Last Name</span>
                            <input type="text" name="lname" id="lname" />
                        </label>
                        <label>
                            <span>Address</span>
                            <input type="text" name="address" id="address" />
                        </label>
                        <label>
                            <span>Phone</span>
                            <input type="text" name="phone" id="phone" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" name="email" id="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" name="pass" id="pass" />
                        </label>
                        <label>
                            <span>Image</span>
                            <input type="file" name="uploads" id="uploads" />
                        </label>
                        <button id="registerSubmit"type="button" class="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>

    </body>
    <script src="js/login.js"></script>

    <script src="https://apis.google.com/js/platform.js?onload=renderButton" async defer></script> --}}

    {{-- <script>
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    </script>
    @endsection
