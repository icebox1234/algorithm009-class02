## 学习笔记

### 递归 Recursion -循环
- 定义：
  - 常用于描述以自相似方法重复事物的过程，通过函数体来进行的循环;
  - 递归和循环没有明显的边界;

- 递归代码模板 
  - 递归的终止条件
  - 处理当前层逻辑
  - 下探到下一层
  - 如果需要清理当前层状态  

```java
public void recur(int level,int param){

  //recursion terminator  递归终结条件
  if(level>MAX_LEVEL){ 
  //process result 处理结果
  return;
  }

  //process current logic  处理当前层逻辑
  process(level,param);

  //drill down 下探到下一层
  recur(level:level+1,newParam);

  //reverse the current level status if needed  清理当前层  

}
```

- 递归的思维要点
  1. 抵制人肉递归;
  2. 找最近重复子问题;
  3. 数学归纳法思维。

 
### 分治/回溯 (Divide & Conquer)

- 分治代码模板
```python
def divide_conquer(problem,param1,param2,...):
# recursion terminator
if problem is None:
print_result
return

# prepare data
data=prepare_data(problem)
subproblems=split_problem(problem,data)

#conquer subproblems
subresult1=selef.divide_conquer(subproblems[0],p1,...)
subresult2=selef.divide_conquer(subproblems[1],p1,...)
subresult3=selef.divide_conquer(subproblems[2],p1,...)
...

# process and generate the final result
result=process_result(subresult1,subresult2,subresult3,...)

# revert the current level states
```
  1. terminator
  2. process（split your big problem）
  3. drill down（subproblems），merge（subresult）
  4. reverse states
