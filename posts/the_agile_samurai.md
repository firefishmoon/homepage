---
title: '[读书笔记]《敏捷武士-看敏捷高手交付卓越软件》'
date: '2024-01-24'
---

# 第一部分 敏捷介绍

## 第一章 敏捷简介

### 1.1 每周交付一些有价值的东西

1. 要将大问题拆分为很多小问题。
2. 要将注意力集中于最重要的实物，心无杂念。
3. 确保正在交付的东西可以工作。(**日常测试**)
4. 寻求反馈。
5. 必要时可以改变过程。
6. 要勇于负责。

多数敏捷团队开始时都是每两周交付一些有价值的东西(大团队会每三周一次)。

敏捷原则：

我们的最高目标是：通过尽早和持续地交付有价值的软件来满足客户。

### 1.2 敏捷计划如何生效

使用 *总故事列表* 和 *用户故事 。*

*总故事列表* 就是项目待做事项列表。包含了所有的高级别特性（*用户故事）*。客户对其设定优先级，开发团队会对其进行估算，而这正式形成项目计划的基础。

- 核心：迭代，在一周至两周内选取客户最重要的故事，然后将其转化为可运行的、测试过的软件。
- 团队成员通过测算团队速率来决定需要承担多少工作（每个迭代周期可以完成多少）。通过追踪速率并预测未来所能完成的任务量。
- 如果任务过多，那就少做一点。在范围方面要灵活处置。
- 当现实与计划相悖时，就应该改变计划。

### 1.3 “完成”的意思就是“完成”

敏捷原则：

可工作的软件是衡量项目成功的主要度量指标。

### 1.4 三条简单准则

1. 在项目的初期不可能收集到所有的需求。
2. 不管你收集到什么需求，最终它们肯定都会发生变化。
3. 总会有任务超时、超支。

方法不止一个！Scrum/极限编程/精益

## 第二章 结实敏捷团队

### 2.1 敏捷项目有何不同

模糊的角色、持续的开发活动和团队责任感。

### 2.2 如何激发敏捷团队

- 集中办公（分布式办公使用Skype、视频会议和社交软件，使得看起来像一个集中办公的团队）
- 专职客户
    
    敏捷原则：
    
    业务人员和开发者在项目的整个过程中每天都要协同工作。
    
- 自组织
    - 要让他们自己创建计划、提出估算，并对项目全权负责。
    - 不要担心所谓的头衔和角色，而要更关注于不断交付出可运行且经过测试的软件。
    - 你找的人应该具有主动性，喜欢掌控自己命运而非唯命是从。
    
    简言之，你要拜托束缚，信任他们并授以权力，这样工作才能完成。
    
    敏捷原则：
    
    最好的架构、需求和设计都源于自组织的团队。
    
- 勇于承担和授权
    
    敏捷原则：
    
    要善于激励项目人员。为他们提高所需要的环境和支持，并且相信他们能完成工作。
    
    培养团队责任感方法：**让团队演示其软件。**
    
- 跨职能
    - 招聘多面手（如全栈开发）。
    - 可能改变他人的工作方式。

### 2.3 我们通常所见之角色

- 敏捷客户
    
    敏捷**客户就是“真理的源泉”。**要让客户尽可能多介入进来，要让他们理解其角色是多么重要，赋予他们权力，从而愿意做出各种决策。
    
- 开发团队
    
    角色模糊性，要求充当多面手。
    
    - 敏捷分析师
        - 帮助编写用户故事
        - 做具体的分析
        - 确保我们的工作都完成了
    - 敏捷程序员
        - 将用户故事转变为可工作的软件
        - 与其他团队成员一起评估
        - 做出技术决策
        
        保证高质量、生产就绪，会做如下工作：
        
        1. 编写测试，并将测试作为一种驱动设计的手段。
        2. 持续设计并改进软件架构。
        3. 保证代码库一直处于生产就绪状态，能随时部署。
    - 敏捷测试者
        - 为新的故事编写测试（自动化测试）
        - 确认故事按预设情节进展
        - 思考大型测试场景
    - 敏捷项目经理
        - 追踪我们是如何做的
        - 协调项目状态
        - 清除挡在团队路上的障碍
    - 敏捷用户体验设计师
        - 使用一系列工具和技术，帮助创建动人的用户体验。（角色模型、故事看板、纸上原型、概念设计）
    - 其他人
        
        数据库管理员（DBA）、系统管理员（SA）、技术文档作者、培训师、业务改进、基础设施和网络。Scrum master。
        

### 2.4 组建敏捷团队的技巧

- 寻求多面手
- 能够欣然接受模糊角色之人
- 那些能够放下自己的架子之团队员工

# 第二部分 敏捷项目开端

## 第三章 如何让每个人都能上车

### 3.1 多数项目是如何被扼杀的

关键在于还没等所有人都*上车*（**对项目的理解没有达成一致**），我们已经启动了项目。

需要完成下列一些任务

- 将项目的目标、愿景和背景传达给团队成员，使其在执行过程中做出明智的决策。
- 向利益相关者提供信息以帮助他们决策项目是否应该继续。

### 3.2 提出尖锐问题

- 你的团队有多少经验？
- 以前做过类似的事情吗？
- 我们有多少钱？
- 谁对项目拥有决定权？
- 如果有2个分析师和30个开发者，你觉得会有什么问题吗？
- 你是否做过其他一些项目？在这些项目中，你负责的团队的开发者只有很少或者没有任何面向对象的经验，但却能通过敏捷方法成功地用Ruby on Rails（RoR）来重写一个遗留的主机系统。

### 3.3 进入交付启动计划

这是一种快速、轻型的、提炼出项目核心的方式。

### 3.4 如何生效

向正确的人提出正确的问题，用幻灯片的形式来展示作品。

### 3.5 交付启动计划简介

1. 为什么会进行这个项目。
2. 做一个电梯演讲。（用30秒和两句话来描述项目）
3. 设计产品包装。
4. 创建一个否定清单。
5. 结识邻居。
6. 出示解决方案。
7. 那些使我们夜不能寐的问题。
8. 估算项目的规模。
9. 明确我们要舍弃什么。（时间、范围、预算、质量）
10. 对项目所需要的付出加以展示。（多长时间？多大花费？需要什么类型的团队？）

## 第四章 纵览全局

### 4.1 提出问题：为什么要做这个项目

先要理解所做项目背后的“为什么”。

- 深入工作现场
- 发现领导意图

### 4.2 做一场电梯演讲

在非常短的时间内阐述你的核心思想。

### 4.3 设计产品包装

1. 集思广益，列举产品优势
2. 创建一个广告词
3. 设计产品包装

### 4.4 创建否定清单

要做什么和不做什么都要说清楚。

### 4.5 结识邻居

想想今后都需要与哪些人打交道，与他们建立一种互相尊重的关系。终极武器还是真诚。

## 第五章 梦想成真

### 5.1 展示技术方案

讨论解决方案并将其摆在团队和客户面前。

- 可以围绕工具和技术设置期望值。
- 可以围绕项目边界和范围将假设形象化。
- 可以沟通风险。

### 5.2 关注那些使我们夜不能寐的问题

在项目早期讨论风险：

- 提前强调了项目的诸多难点。（谈论风险的最好时机就是项目的初期）
- 让你有机会召集那些狂热者。
- 这种感觉挺不错。

找出那些值得我们担心的风险。

### 5.3 估算项目的规模

- “从小处着眼”
    
    项目周期不要超过6个月
    
- 对规模设置一些期望值
    
    拿出一个总体计划，但是不能让客户认为所提交的计划是硬性承诺。这些计划只是简单的、未经证实的高级猜测。
    

### 5.4 明晰要舍弃什么

- 狂暴四侠
    1. 时间
        
        需要限定时间。
        
    2. 预算
        
        需要限定预算。
        
    3. 质量
        
        质量也应该固定，并且永远要执行最高标准。
        
    4. 范围
        
        在项目的范围方面需要进行灵活处置。
        

### 5.5 展示需要多少资源

- 组建团队
    
    讨论一下角色和责任
    
- 明白谁是真正的决策者
    
    如果有多个利益方【客户】，需要能以一种声音去和团队对话。
    
- 估算一下需要花费多少
    
    人x月@多少钱/小时 （8人x3个半月@100美元/小时=448 000美元）
    
- 将所有东西都聚在一起
    
    客户最终只想知道两个问题的答案：
    
    - 什么时候完成？
    - 费用是多少？
    
    事先说明，我们无法现在就对这些日期和数字做出百分百得承诺，这些数字还是个估计。
    

# 第三部分 敏捷项目计划

### 第六章 收集用户故事

### 6.1 文档得症结所在

如果过度依赖重型文档

- 对变化束手无策
- 他们按照文档而不是客户的需求来开发
- 他们做出了错误的预测和假定
- 他们浪费了大量的时间

需求：

*需求这个词一直在误导着软件开发，这个词在字典里面有‘强制’或者‘义务’的意思。其中还隐含着专制和永恒，这是对拥抱变化的一种抑制。因此，‘需求’这个词明显是错误的。*

敏捷原则：

无论是团队内还是团队间，传递信息最有效的方法就是面对面的交流。

### 6.2 进入用户故事

团队使用小卡片来写用户故事，只需写下少许关键词，收集特性的要义。

### 6.3 优秀的用户故事要素

- 用户故事要对业务有意义。
    
    如 “添加数据连接池” 替换为 “将页面载入时间从10秒降到2秒”。
    
- 有始有终
    
    贯穿架构的所有层面 【UI（HTML，Ajax，css）/ 中间层（C#，Java，Python）/ 数据层（Oracle，SQL Server）】，传达一些有价值的东西。
    
- 独立
    
    故事之间不应该互相纠结，彼此依赖。
    
- 可协商
    
    性能/体验 可协商，才能在预算范围内工作。
    
- 可测试
- 小型与可估算
    
    将故事小型化（1~5天），可以确保它们符合1~2周的迭代周期。
    

INVEST （Independent，Negotiable，Valuable，Estimatable，Small and Testable）

“网站必须超级快”，“设计要漂亮”，这类故事称为约束。

- 优秀故事模板
    
    作为<用户类别>，我希望达成<某个目标>，以便于<一些原因>
    
    谁、要做什么以及为什么要这样做。
    
    还可以使用简称，如“添加用户”。
    

### 6.4 如何主持收集故事研讨会

开发团队与客户聚集在一起，将系统所要实现的用户故事写下来。

- 第一步：要有一个开发的大空间
- 第二步：要画很多图画
    
    现在追求的是广度，不要钻研过深。
    
- 第三步：编写大量用户故事
    
    大的故事称为史诗，即通常需要几周才能完成的大型故事。
    
- 第四步：将一切考虑周全
    
    数据迁移、负载测试、日程文书工作、产品支持文档、培训材料等，都需要制作一个卡片，将其写下来。
    
- 第五步：整理清单，使其闪亮
    
    重复看几遍，找出重复项和遗漏项，将相关的故事按逻辑组合在一起，然后将其合并为一个简单、易懂的待办事项列表。
    

## 第七章 估算：精美的预测艺术

### 7.1 高级估算的问题

高级估算就是猜测

### 7.2 将理论变为实践

- 相对估算
    
    通过故事之间的相对估算，测算出团队的开发速度，我们就能得出所有的要素，形成敏捷计划。
    
    1相对天数≠1日历日
    
- 点数系统
    
    建议将估算固定为一种简单易用的点数系统，并且不用将估算与日历上的时间联系在一起。
    
    **理想人天**是另一种形式的故事点。一个理想人天就是完美的一天，你不会受到任何打扰，可以不间断地工作8个小时。
    
- 如何生效
    - 三角剖分
        
        拿出一些示范参考故事，然后将我们的故事与之进行相对应的估算。
        
- 计划扑克
    
    计划扑克是一种游戏，游戏中开发团队要首先对故事进行单独估算（使用一组卡片，上面的数字可以是1、3、5点），然后共同对比结果。
    
    如果大家的估算基本一致，就可以保留这个估算。但如果出现差异，团队就要进行讨论并重新估算，最终达成一致。
    

## 第八章 敏捷计划：应对现实

### 8.1 静态计划的症结

团队的变动、计划的缩水以及需求的不断变化都是正常的。

我们的计划方式要能够：

- 向客户交付极具价值的东西
- 保持高度的可见性、公开及诚信
- 做出的承诺要能遵守
- 必要时，使我们能够适应和改变计划

### 8.2 开始敏捷计划

敏捷项目中的待做事项列表被称为 *主用户故事列表，*包含了客户希望其软件拥有的所有特性。

将用户故事转化为可工作的软件的速度被称为 *团队速率*。我们用其测量团队的生产率，并对未来的交付日期设置期望值。

完成任务的关键就是 *敏捷迭代*——1~2周的冲刺，在此期间，我们将用户故事转化为可工作的、生产就绪的软件。

迭代次数=全部工作量/估算的团队速率

例如：

迭代次数=100点 / 10点每次迭代=10次迭代

初始项目计划并不是硬性承诺，只是一种预测。

### 8.3 在范围方面灵活处置

坚持让客户摈弃旧的故事并添加新故事。

敏捷原则：

拥抱变化，即使是在项目开发后期。要善于利用需求变化，帮助客户获得竞争优势。

### 8.4 第一个计划

- 第一步：创建主用户故事清单
    
    主用户故事清单就是客户希望在其软件中见到的用户故事（特性）集合。敏捷团队会从主故事清单中选出故事子集，然后将其做为一个 *发布* 来处理。
    
    - 定义发布
        
        一次发布就是对客户有意义、值得他们去打包和部署的一组按逻辑归纳的故事。也可以将其称为最小可市场化特性集（Minimal Marketable Feature set, MMF）。
        
        在软件的首次发布中，要选取最少的特性，来交付最大的价值（可市场化）。
        
        敏捷原则：
        
        要做到简洁，即尽最大可能减少不必要的工作。这是一门艺术。
        
- 第二步：估算规模
    
    使用第七章的敏捷估算技巧
    
- 第三步：划分优先顺序
    
    让客户从业务价值角度来对用户故事列表划分优先顺序。
    
- 第四步：估算团队速率
    
    团队速率=完成的故事点数/迭代
    
    项目开始阶段，如果速率有波动，不要惊慌。三到四个迭代后，团队速率就会趋于稳定。
    
    “完成”的定义：敏捷交付故事意味着要分析、测试、设计和编码。
    
- 第五步：挑选一些日期
    - 按日期交付
        
        但是交付什么特性可以灵活处理。
        
    - 按特性集交付
        
        但是何时交付可以灵活。
        

### 8.5 燃尽图

燃尽图是一种显示项目状态的强大工具。只需一瞥，你就可以回答下面的问题：

1. 完成了多少工作
2. 还剩下多少工作
3. 团队速率
4. 我们预期的完成日期

燃起图：

图的另一种形式。

### 8.6 将项目转入敏捷

如果项目进行到了一半，还有很多方法可以将其转入敏捷。

### 8.7 付诸实践

- 情景1：客户提出了一些新要求
    
    可以推迟发布日期，或者去除一些不太重要的故事（推荐后者）。
    
    需要明白决定权在客户那。
    
    如果客户实在是什么都想要，那就创建一个“可以有”清单，告诉他们如果在项目的末期还有时间，你将会首先处理这些故事。
    
- 情景2：行进的速度没有预期快
    
    告诉客户不要太相信初始计划。
    
    灵活处理范围。也可以添加资源或者延迟日期（这两者都不太理想）。
    
    - 斯巴达勇士之方式
        
        挑选项目中真正重要的一个或两个特性，然后计算出需要多长时间才能开发出一个精炼的、关键性的极简特性版本。
        
        然后用其对比余下的已经做了对应性估算的故事，盘点以下手头上的时间和资源，看看有没有可能完成一个极简的系统版本。
        
- 情景3：失去了一位宝贵的团队成员
    
    通过两三个迭代，就能准备知道影响有多大了。
    
- 情景4：超时了
    
    灵活处理范围，如果将时间减半，就要将希望交付的特性数量也减半。
    

# 第四部分 敏捷项目执行

## 第九章 迭代管理：梦想成真

### 9.1 如何每周都交付一些有价值的东西

- 需要一种轻型而准确的分析方法，在必要时能完全地满足需求。
- 其次，开发实践必须要坚如磐石。我们没时间不断回头修改代码，问题要消灭在萌芽状态。这就要求随着工作的进行，就有设计好、测试好并且完全集成的代码。
- 再次，测试必须要与开发步调一致。

### 9.2 敏捷迭代

敏捷迭代就是在限定的时间内（一到两周），选取首要的用户故事，将其转化为可运行的软件。

### 9.3 寻求帮助

所有的用户故事都要经历三个步骤才能转化为可运行的软件。

1. 分析和设计（为开工做准备）。
2. 开发（做工作）。
3. 测试（检查工作）。

### 9.4 第一步：分析和设计——为开工做准备

- 适量分析
    
    小型、集中办公并有现场客户的团队不会太依赖于正式的文档。通常，一张卡片和一番交流（辅以少许精挑细选的示意图和图画）就足够了。
    
    中等规模的团队会稍微有些分散（但相互之间的距离仍可以步行到达），要求会稍微多一些。带有简短的描述、任务分解和测试标准列表的单页可能更适合他们。
    
    大型团队，所需的东西会更多一些，这样才能确保大家沿着正确的方向前进，并保持一致。
    
- 适时分析
    
    要在刚好需要用户故事时（通常是在迭代之前）对其进行深入分析。
    
    - 对于启动项目来说，一个优秀的流程图再好不过了。
    - 然后创建一个角色模型。
    - 使用纸上原型对不同设计进行快速原型化。
    - 通过编写一些可接受的测试来界定成功与否。写出你任务可以对故事进行测试的三件事情。（如果不知道该测试哪三件事，就随便试）

### 9.5 第二步：开发

敏捷项目中，需要完成如下这些任务：

1. 编写自动化测试
2. 不断地演进并提高我们的设计。
3. 持续集成代码，生产可运行的软件。
4. 确保我们的代码符合客户谈论系统时使用的语言。

- 使用第0个迭代启动项目
    
    一些事情在开工前就理顺。我们将这个开始阶段成为第0个迭代。
    
    源代码控制（svn，git） 、自动化构建（Ant，NAnt，Rake）、开发和测试环境
    

### 9.6 第三步：检查工作

根据测试标准逐项检验的同时为客户演示软件，让他们看到软件是可以运行的。如果能让客户亲自运行演示软件，而你坐在旁边观察他们如何使用软件，效果就更好了。

### 9.7 看板

看板非常适合于运营型/支持型得团队，他们反应要迅速，无法采用固定长度得迭代。

## 第十章 创建敏捷沟通计划

### 10.1 任何迭代期内都要做得四件事

1. 确保下一迭代工作准备就绪（故事计划会议）。
2. 从上一迭代故事中得到反馈（展示活动）。
3. 制定下一迭代得工作安排（迭代计划会议）。
4. 不断找出需要改进得部分（小型回顾）。

### 10.2 故事计划会议

在SPM期间，我们将与客户一起对接下来得用户故事得测试标准进行检查，与开发者一起对估算进行检查，从总体上来保证已经完成下一批迭代故事得准备工作。

### 10.3 展示活动

展示本迭代的故事，获取客户反馈。

要将部署在测试服务器上的实际代码展示出来，而并不是什么漂亮图片或者美好愿景。这个东西要在真正需要时立即可以投入战斗并部署好。它应该是成品。

### 10.4 计划下一次迭代

- 对项目进行体验
- 审核团队速率
- 签署故事和承诺

在此，你可以快速地预报一下项目的进展情况。讨论一下某个特别棘手的问题，你可以借此机会提出问题，并提供选择方案，然后拿出处理意见。

如果要讨论日期，可以使用燃尽图。

如何给出建设性反馈:

- 苏茜，我发现你在上次迭代中的打印模块做得很不错，但是你的单元测试确实还欠火候。
- 苏西，打印模块做得真不错。如果你的单元测试也能有这样的水平，你将很快成为超一流选手。

注意差异，去掉“但是”这个词，你的语调完全变了，而信息又传递了出去。

想要全面了解如何进行有效的沟通，可以读一下戴尔·卡耐基的经典著作《人性的弱点》。

### 10.5 如何主持小型回顾活动

敏捷原则：

团队要定期反省如何能够做到更有效，并相应地调整团队的行为。

这里指的回顾就是一种快捷而集中的讨论，时间限定在10~15分钟之内。讨论期间，你与团队要定期聚在一起，探讨哪些地方做得不错，哪些地方还需改进。

- 回顾活动最高指导原则
    
    不管发生了什么，我们都理解并坚信：每个人对自己的工作都已全力以赴，都充分考虑了当时的情况，施展了自己的技能，调动了可用的资源。
    
    **换句话说，回顾活动不是政治迫害。**
    
1. 我们哪些方面做得确实不错？（暖场）
2. 我们怎样才能做得更好？（哪些方面需要提升）

### 10.6 如何召开日常站立会议

快速的日常同步以达成一致意见

简短（少于10分钟）

没有座位

### 10.7 怎么有效就怎么做

是否需要单独开会，还是可以合起来只开一个会，一切都由你自己来定。

## 第11章 创建可视化工作区

### 11.1 噢喔……重量级人物来啦

- 让管理人员了解最新情况
    
    把管理人员直接带到工作区内，让他们看到项目的一手状态。
    
    - 项目的交付启动计划（你早已将其挂到墙上）。
    - 发布墙（已经完成的任务和剩余任务）
    - 故事板（本迭代的工作内容，【未开始/处理中/待测试/完成】）
    - 团队速率图
    - 项目燃尽图

### 11.2 如何创建可视化工作区

- 建故事墙
- 建发布墙
- 建速率表和燃尽图
- 如果还有空间，不妨再做一个交付启动计划

### 11.3 说明意图

工作协议/共享价值 

### 11.4 创建并共享一种通用的领域语言

对一些关键性的单词，给出明确的定义，并使软件与之匹配（比如在界面、代码和数据库中都要一致）。

### 11.5 留意bug

从项目的第一天开始就要追逐并消灭bug。

必要时抽出每个迭代10%的时间用来消灭bug并消除技术债务。

# 第五部分 创建敏捷软件

## 第十二章 单元测试：了解软件的运行

### 12.1 伙计们，欢迎来到拉斯维加斯

在修复bug前编写一个缺陷单元测试

- 证明你理解了bug的本质
- 相信你已将其修复
- 确保bug不会再返回到程序中去

### 12.2 进入单元测试

单元测试是小型的、方法级测试，开发者每次对软件改变时都要编写这种测试，为的时保证他们所做出的改变可以像预想的那样工作。

对代码块编写大量的单元测试好处颇多：

- 能够给予你及时反馈。
- 能极大地降低回归测试的成本。
- 能极大地减少调试时间。
- 能让你部署起来信心十足。

测试任何可能出错的地方

## 第十三章 重构：偿还技术债务

### 13.1 收放自如

有时候会赶时间期限仓促写下代码，形成技术债务。

### 13.2 技术债务

技术债务不止是代码问题，在数据、构建以及配置文件中也同样有可能存在技术债务。

### 13.3 通过重构还债

在不影响整体外部行为的前提下，不断地对软件进行细微地设计改进，我们把这种渐进式地实践叫做重构。

- 重构要坚持不懈

如果项目接近尾声，最好还是不要进行重构。

## 第十四章 测试驱动开发

### 14.1 首先编写测试

测试驱动开发（TDD）是一种软件开发技巧：

1. 在编写任何系统地新代码前，首先都要编写一个失败地单元测试，展示新代码地预期作用。此刻，你要对设计加以仔细考虑。
2. 然后，不管付出什么代价，你都要保证测试通过。如果发现测试可以全面执行，那就添加新代码。如果不能，那就再多做些工作，直到测试通过。
3. 重构，然后再返回头来解决有问题代码，同时想尽各种办法将测试通过。此时，你就是再消除重复，确保一切都是精益的、简洁的，并保持尽可能整洁。

原则1：除非你先有了一个失败的测试，否则不要编写任何新代码。

原则2：对所有“可能”失败的东西进行测试。

### 14.2 通过测试来应对复杂性

## 第十五章 持续集成使其处于生产就绪状态

### 15.1 表演时刻

用持续集成来对项目进行管理，能够随时随地地向任何人展示我们的产品。

### 15.2 生产就绪的文化

生产从项目的第一天就开始了。从第一天写下第一行代码开始，你就要将项目看作它已投产，以后你所做的只是在改进一个实际系统。

### 15.3 持续集成指的是什么

持续集成就是指不断把开发者对其软件所做出的改变集成在一起。

保持快捷：

要随时关注构建时间，经验是最好能将时间控制在10分钟以内。更小的项目一般可以控制在5分钟以内。

### 15.4 怎样做到

需要以下几样东西：

- 源代码库
- 签入进程
- 自动化构建
- 愿意分小段工作

### 15.5 建立签入过程

1. 从库中获取最新代码
2. 做出改变
3. 运行测试
4. 检查更多的更新
5. 再次运行测试
6. 签入

### 15.6 创建自动化构建

优秀的自动化构建能够编译代码、运行测试。

### 15.7 分小段工作

集成代码如果分成小段来做会比较容易。

### 15.8 下面我该做什么

不要把自己当成了传教士。

不要教别人怎么去做。

相反，要以身作则，接受他人不一定买账的现实，而自己做好必须要做的事。

不要担心是否真的敏捷。

请回答下面两个问题：

- 我们是否每周都在交付一些有价值的东西？
- 我们是否在努力持续改进？

如果这两个问题的答案都是“是”，那你就真正敏捷了。