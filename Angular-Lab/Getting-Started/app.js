angular.module('flapperNews', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: '/home.html',
              controller: 'MainCtrl'
        })
        $urlRouterProvider.otherwise('home')
        .state('posts', {
            url: '/posts/{id}',
            templateUrl: '/posts.html',
            controller: 'PostsCtrl'
        })
}])
.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0,
            Comments: [
                {author: 'Joe', body: 'Cool post!', upvotes: 0},
                {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
            ]
        })
        
        $scope.post = posts.posts[$stateParams.id]

        $scope.addComment = function(){
            if($scope.body === ''){return}
            $scope.post.comments.push({
                body: $scope.body,
                author: 'user',
                upvotes: 0
            })
        }

        $scope.body = ''
    }
])

angular.module('flapperNews', [])
.factory('post', [function(){
    var o = {
      posts: []
    }
    return o
}])

angular.module('flapperNews', [])
.controller('MainCtrl', [
    '$scope',
    'posts',
    function($scope, posts){
        $scope.posts = [
            {title: 'post 1', upvotes: 5},
            {title: 'post 2', upvotes: 2},
            {title: 'post 3', upvotes: 15},
            {title: 'post 4', upvotes: 9},
            {title: 'post 5', upvotes: 4}
        ]

        //$scope.posts = posts.posts

        $scope.addPost = function(){
            if(/*!$socpe.title || */$scope.title === ''){
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            })
            $scope.title = ''
            $scope.link = ''
        }
        $scope.incrementUpvotes = function(post){
            post.upvotes += 1
        }
    }
])
