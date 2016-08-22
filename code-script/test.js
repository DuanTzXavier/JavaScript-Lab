var robot = {
  name: 'Robot',
  height: 1.6,
  run: function(){
    console.log(this.name + ' is running...');
  }
};

var xiaoming = {
  name: '小明'
};

xiaoming.__proto__ = Student;

xiaoming.name;
xiaoming.run();

var Bird = {
  fly: function(){
    console.log(this.name + 'is flying');
  }
}

xiaoming.__proto__ = Bird;

xiaoming,fly();

function creatStudent(name){
  var s = Object.creat(Student);
  s.name = name;
  return s;
}

var xiaoming = creatStudent('小明');
xiaoming.run();
xiaoming.__proto__ == Student;
