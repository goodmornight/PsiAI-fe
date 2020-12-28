const projects = [
  {
    title: 'Schubert / StyleTransfer',
    // 图片地址
    imgUrl: '',
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
    title: 'Zalando / Fashion MNIST',
    // 图片地址
    imgUrl: '',
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    frame: 'PyTorch',     // 框架
    pyVer: 'Python 3.8',  // py版本
    like: 11,             // 点赞
    star: 1500,           // 收藏
    watch: 16000,         // 浏览
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

const datasets = [
  {
    title: 'Zalando / Fashion MNIST',
    // 图片地址
    imgUrl: '',
    // 简介
    desc: "Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples. Each example is a 28x28 grayscale image, associated with a label from 10 classes. Fashion-MNIST is a dataset of Zalando's article images—consisting of a training set of 60,000 examples and a test set of 10,000 examples.",
    isPublic: true,       // 是否公开 
    version: 1,           // 版本
    type: '图片',         // 框架
    task: '标签分类',     // 任务
    like: 11,            // 点赞
    star: 1500,          // 收藏
    watch: 16000,        // 浏览
    // 标签
    tags: ['科学', '生活'],
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
]

const containers = [
  {
    title: 'afenqi / a1b2c3a1b2c3a1b2',
    type: '基础版',
    detail: '2核4G内存',
    proj: 'Lafayette / StyleTrans',
    branch: 'ChaosTransStype',
    createdTime: 1608174894608,
    updateTime: 1608174895208,
    state: 'running',
    runningDuration: 10000,
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
  },
]
export { projects, datasets, containers }