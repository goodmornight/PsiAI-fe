const projects = [
  {
    id: 1,
    title: 'Schubert / StyleTransfer',
    // 图片地址
    imgUrl: require('@assets/images/covers/2.jpg'),
    username: 'admin',
    avatar: require('@assets/images/users/avatar.svg'),
    size: 10240,
    // 简介
    desc: "This repository contains a slightly modified version of Fast Style Transfer in TensorFlow. It trains a neural network on the style of any image you provide it and outputs a model you can use in ml5.js with the ml5.styleTransfer() method.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本、任务
    like: 11,             // 点赞
    star: 1500,             // 收藏
    watch: 16000,          // 浏览
    // 标签
    tags: ['计算机视觉', '机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: false
  },
  {
    id: 2,
    title: 'Zalando / Fashion MNIST',
    // 图片地址
    imgUrl: require('@assets/images/covers/2.jpg'),
    username: 'admin',
    avatar: require('@assets/images/users/avatar.svg'),
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本
    like: 11,             // 点赞
    star: 1500,           // 收藏
    watch: 16000,         // 浏览
    size: 12240,
    // 标签
    tags: ['机器学习'],
    // 参与用户
    users: [{
      userId: 'admin1',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin2',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin3',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    },{
      userId: 'admin4',
      imgUrl: require('@assets/images/users/avatar.svg'),
    },{
      userId: 'admin5',
      imgUrl: require('@assets/images/users/avatar-1.svg'),
    },{
      userId: 'admin6',
      imgUrl: require('@assets/images/users/avatar-2.svg'),
    }],
    // 最近更新时间
    updateTime: 1608174894608,
    isArchive: false,
    isInvalid: true
  }
]
export { projects }