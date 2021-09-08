export function multistep(steps: any[], args: any[], callback: Function) {
  var tasks = steps.concat();

  setTimeout(function () {
    var task = tasks.shift();
    task.apply(null, args || []);   //调用Apply参数必须是数组

    if (tasks.length > 0) {
      setTimeout(arguments.callee, 25);
    } else {
      callback();
    }
  }, 25);
}