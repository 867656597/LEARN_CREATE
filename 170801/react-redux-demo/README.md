##总结

1.使用react-redux相对代码量减少很多。

2.但是要按照react-redux的拆分为傻瓜组件和容器组件 具体：使用connect API（mapStateToProps,mapDispatchToProps）将傻瓜组件转换程容器组件供使用。

3.mapStateToProps(state,ownProps)接受两个参数，第一个参数表示公共的store的state，第二获取组件私有的props。

4.mapDispatchToProps(dispatch,ownProps)也接收两个参数，字面意思。

5.Provider组件包裹根组件  从而state注入到所有子组件中。