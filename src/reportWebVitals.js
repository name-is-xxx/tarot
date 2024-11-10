const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 累计布局偏移量
      getCLS(onPerfEntry);
      // 首次输入延迟
      getFID(onPerfEntry);
      // 首次内容渲染
      getFCP(onPerfEntry);
      // 最大文本块或图像渲染时间
      getLCP(onPerfEntry);
      // 服务器响应第一个字节时间
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
