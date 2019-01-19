body {
  text-align: center;
  font-family: sans-serif;
  margin:0;
}
#bg {
  width: 100%;
  height: 100%;
}
#word {
    display: inline-block;
    box-shadow: 1px 0px 0px black;
    padding-right: .1em;
    animation: pipe .3s infinite alternate;
}
@keyframes pipe{
  from{box-shadow: 1px 0px 0px black;}
  from{box-shadow: 1px 0px 0px white;}
}
img.profile {
  width: 176px;
  border-radius: 176px;
  border: 8px solid #fff;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  transition:all .2s;
}
h1 {
  color: #444444;
  text-shadow: 0px 2px 0px #fff;
}
h3{
  color: #828282;
  text-shadow: 0px 2px 0px #fff;
}
img.profile:hover {
  transform: rotate(20deg);
}
.bio{
  line-height: 1.5;
}
a{
  text-decoration: none;
  color: #333;
  box-shadow: 0px 1px 0px;
}
a:hover{
  opacity: .5;
}
.icon{
  display: inline-block;
  margin:0 10px;
}
.no-underline{
  box-shadow: none;
}
.btn {
  background-color: black;
  color: white;
  display: inline-block;
  padding: .4em .8em;
  border-radius: .25em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all .2s;
}
.btn:hover{
  letter-spacing: 5px;
}
.t-left{
  text-align: left;
}
li{
  margin-bottom: .5em;
}