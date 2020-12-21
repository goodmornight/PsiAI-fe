const projects = [
  {
    title: 'Zalando / Fashion MNIST',
    // 图片地址
    imgUrl: '',
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. ",
    // 是否公开
    isPublic: true,
    // 版本
    version: 1,
    // 框架
    frame: 'PyTorch',
    // py版本、任务
    pyVer: 'Python 3.8',
    // 标签
    tags: ['计算机视觉', '机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      imgUrl:require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      imgUrl:require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      imgUrl:require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608
  }
]
export { projects }