(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{275:function(a,s,t){"use strict";t.r(s);var n=t(13),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_01-基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-基础"}},[a._v("#")]),a._v(" 01 基础")]),a._v(" "),t("h3",{attrs:{id:"线程与进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程与进程"}},[a._v("#")]),a._v(" 线程与进程")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("上下文切换，并行和并发，同步与异步。")]),a._v(" "),t("p",[a._v("导致线程上下文切换的原因大概有以下几种：")]),a._v(" "),t("p",[a._v("1）线程的 CPU 时间片用完")]),a._v(" "),t("p",[a._v("2）发生了垃圾回收")]),a._v(" "),t("p",[a._v("3）有更高优先级的线程需要运行")]),a._v(" "),t("p",[a._v("4）线程自己调用了 sleep、yield、wait、join、park、synchronized、lock 等方法")])]),a._v(" "),t("li",[t("p",[a._v("Java 线程与操作系统的线程的区别。")])])]),a._v(" "),t("p",[a._v("用户级线程：在这种模型下，我们需要自己定义线程的数据结构、创建、销毁、调度和维护等，这些线程运行在操作系统的某个进程内，然后操作系统直接对进程进行调度。")]),a._v(" "),t("p",[a._v("内核级线程：我们可以直接使用操作系统中已经内置好的线程，线程的创建、销毁、调度和维护等，都是直接由操作系统的内核来实现，我们只需要使用"),t("strong",[a._v("系统调用")]),a._v("就好了，不需要像用户级线程那样自己设计线程调度等。")]),a._v(" "),t("p",[t("strong",[a._v("虚拟机中的线程状态，不反应任何操作系统中的线程状态")]),a._v("。")]),a._v(" "),t("p",[a._v("现今 Java 中线程的本质，其实就是操作系统中的线程，其线程库和线程模型很大程度上依赖于操作系统（宿主系统）的具体实现，比如在 Windows 中 Java 就是基于 Win32 线程库来管理线程，且 Windows 采用的是"),t("strong",[a._v("一对一")]),a._v("的线程模型。")]),a._v(" "),t("h2",{attrs:{id:"_02-java-线程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-java-线程"}},[a._v("#")]),a._v(" 02 Java 线程")]),a._v(" "),t("h3",{attrs:{id:"创建线程-3-种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建线程-3-种"}},[a._v("#")]),a._v(" 创建线程（3 种）")]),a._v(" "),t("ul",[t("li",[a._v("Thread")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 线程需要执行的任务")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 一般的写法")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"t1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 线程需要执行的任务")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("ul",[t("li",[a._v("Thread + Runnable")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),a._v(" t2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 要执行的任务\t")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"t2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("ul",[t("li",[a._v("Thread + Callable + "),t("code",[a._v("FutureTask")])])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 获取任务执行的结果 Callable，Thread 不接收 Callable，使用 FutureTask 将 Callable 包装成 Runnable")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Callable 和 FutureTask 的泛型填的就是 Callable 任务返回的结果类型（就是 call 方法的返回类型）。")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 可能会造成主线程的阻塞")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCallable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Callable")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("call")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throws")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 要执行的任务")]),a._v("\n        \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" task "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("FutureTask")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyCallable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("task"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("h3",{attrs:{id:"java-线程六种状态与操作系统五状态模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-线程六种状态与操作系统五状态模型"}},[a._v("#")]),a._v(" Java 线程六种状态与操作系统五状态模型")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1204/image-20220620152553161.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"_03-进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-进阶"}},[a._v("#")]),a._v(" 03 进阶")]),a._v(" "),t("h3",{attrs:{id:"线程安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程安全"}},[a._v("#")]),a._v(" 线程安全")]),a._v(" "),t("h4",{attrs:{id:"java-内存模型-java-memory-model-jmm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型-java-memory-model-jmm"}},[a._v("#")]),a._v(" Java 内存模型 （Java Memory Model，JMM）")]),a._v(" "),t("p",[a._v("为了屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果。JMM 其实是在遵循一个基本原则，即只要不改变程序的执行结果（指的是单线程程序和正确同步的多线程程序），编译器和处理器怎么优化都行。")]),a._v(" "),t("p",[a._v("主内存是 Java 虚拟机内部的一部分，类比物理机的主内存，工作内存类比高速缓存。")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("原子性")]),a._v(" "),t("p",[a._v("锁，"),t("code",[a._v("java.util.concurrent.atomic")]),a._v("中的原子类(CAS 操作)")])]),a._v(" "),t("li",[t("p",[a._v("可见性")]),a._v(" "),t("p",[a._v("就是指当一个线程修改了共享变量的值时，其他线程能够"),t("strong",[a._v("立即")]),a._v("得知这个修改。")]),a._v(" "),t("p",[t("code",[a._v("volatile")]),a._v("，"),t("code",[a._v("synchronized")]),a._v("，"),t("code",[a._v("final")])])]),a._v(" "),t("li",[t("p",[a._v("有序性")]),a._v(" "),t("p",[t("strong",[a._v("as-if-serial 语义")]),a._v("：不管怎么重排序，"),t("strong",[a._v("单线程")]),a._v("环境下程序的执行结果不能被改变。"),t("strong",[a._v("CPU 和编译器不会对存在数据依赖关系的操作做重排序")]),a._v("，"),t("strong",[a._v("不同 CPU 之间和不同线程之间的数据依赖性是不被 CPU 和编译器考虑的")]),a._v("。")]),a._v(" "),t("p",[t("code",[a._v("synchronized")]),a._v(" 通过排他锁的方式保证了同一时间内，被 "),t("code",[a._v("synchronized")]),a._v(" 修饰的代码是单线程执行的。")]),a._v(" "),t("p",[a._v("as-if-serial 语义保证单线程内程序的执行结果不被改变，Happens-before 关系保证正确同步的多线程程序的执行结果不被改变。")])])]),a._v(" "),t("h3",{attrs:{id:"happens-before-原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#happens-before-原则"}},[a._v("#")]),a._v(" Happens-before 原则")]),a._v(" "),t("p",[a._v("判断数据是否存在竞争，线程是否安全的非常有用的手段。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("如果一个操作 Happens-before 另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。")])]),a._v(" "),t("li",[t("p",[a._v("两个操作之间存在 Happens-before 关系，并不意味着 Java 平台的具体实现必须要按照 Happens-before 关系指定的顺序来执行。如果重排序之后的执行结果，与按 Happens-before 关系来执行的结果一致，那么这种重排序并不非法（也就是说，JMM 允许这种重排序）。")])])]),a._v(" "),t("h3",{attrs:{id:"_8-条-happens-before-规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-条-happens-before-规则"}},[a._v("#")]),a._v(" 8 条 Happens-before 规则")]),a._v(" "),t("ul",[t("li",[a._v("程序次序规则（Program Order Rule）：在"),t("strong",[a._v("一个线程")]),a._v("内，按照控制流顺序，书写在前面的操作先行发生（Happens-before）于书写在后面的操作。注意，这里说的是控制流顺序而不是程序代码顺序，因为要考虑分支、循环等结构。")]),a._v(" "),t("li",[a._v("管程锁定规则（Monitor Lock Rule）：一个 unlock 操作先行发生于后面对同一个锁的 lock 操作。这里必须强调的是 “同一个锁”，而 “后面” 是指时间上的先后。")]),a._v(" "),t("li",[a._v("volatile 变量规则（Volatile Variable Rule）：对一个 volatile 变量的写操作先行发生于后面对这个变量的读操作，这里的 “后面” 同样是指时间上的先后。")]),a._v(" "),t("li",[a._v("线程启动规则（Thread Start Rule）：Thread 对象的 start() 方法先行发生于此线程的每一个动作。")]),a._v(" "),t("li",[a._v("线程终止规则（Thread Termination Rule）：线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过 Thread 对象的 join() 方法是否结束、Thread 对象的 isAlive() 的返回值等手段检测线程是否已经终止执行。")]),a._v(" "),t("li",[a._v("线程中断规则（Thread Interruption Rule）：对线程 interrupt() 方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过 Thread 对象的 interrupted() 方法检测到是否有中断发生。")]),a._v(" "),t("li",[a._v("对象终结规则（Finalizer Rule）：一个对象的初始化完成（构造函数执行结束）先行发生于它的 finalize() 方法的开始。")]),a._v(" "),t("li",[a._v("传递性（Transitivity）：如果操作 A 先行发生于操作 B，操作 B 先行发生于操作 C，那就可以得出操作 A 先行发生于操作 C 的结论。")])]),a._v(" "),t("h4",{attrs:{id:"锁类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁类型"}},[a._v("#")]),a._v(" 锁类型")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("悲观锁和乐观锁")])]),a._v(" "),t("li",[t("p",[a._v("自旋锁")])]),a._v(" "),t("li",[t("p",[a._v("重入锁和不可重入锁")])]),a._v(" "),t("li",[t("p",[a._v("公平锁和非公平锁")])]),a._v(" "),t("li",[t("p",[a._v("共享锁和排他锁")])]),a._v(" "),t("li",[t("p",[a._v("偏向锁")])]),a._v(" "),t("li",[t("p",[a._v("重量级锁和轻量级锁")]),a._v(" "),t("p",[a._v("优先使用偏向锁（101），然后是轻量级锁（00），重量级锁（10）。正常情况下的 "),t("code",[a._v("MarkWord")]),a._v(" 是01。Java 中的 synchronized 有偏向锁、轻量级锁、重量级锁，分别对应了锁只被一个线程持有、不同线程交替持有锁、多线程竞争锁三种情况。当条件不满足时，锁就会按照顺序进行升级。")])])]),a._v(" "),t("p",[a._v("wait() notify()，当多个线程 wait 时，notify 可能会产生虚假唤醒问题。"),t("code",[a._v("notifyAll()")]),a._v("解决一部分问题，但是其他业务相关线程的条件还没有满足就被唤醒，出现问题，使用 while 循环判断。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("while")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Condition")]),a._v(" untenable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wait")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// doing")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// others thread")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("synchronized")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// doing")]),a._v("\n    lock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("notifyAll")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h4",{attrs:{id:"锁的实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#锁的实现"}},[a._v("#")]),a._v(" 锁的实现")]),a._v(" "),t("p",[t("code",[a._v("Lock")]),a._v("接口（"),t("code",[a._v("java.util.concurrent.locks")]),a._v("），AQS（"),t("code",[a._v("AbstractQueuedSynchronizer")]),a._v("）")]),a._v(" "),t("h4",{attrs:{id:"aqs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aqs"}},[a._v("#")]),a._v(" AQS")]),a._v(" "),t("p",[a._v("使用了模板方法设计模式。")]),a._v(" "),t("ul",[t("li",[a._v("AQS 是一个抽象类，是用来构建锁或者其他同步组件的基础框架，它使用了一个 "),t("code",[a._v("volatile")]),a._v(" 修饰的 int 成员变量 "),t("code",[a._v("state")]),a._v(" 表示同步状态，通过内置的 FIFO 双向队列（源码注释上写的 CLH（Craig，Landin，and Hagersten） 队列（三个人名的简称），其实就是一个先进先出的双向队列）来完成线程们获取资源的时候的排队工作。")]),a._v(" "),t("li",[a._v("具体来说，如果某个线程请求锁（共享资源）失败，则该线程就会被加入到 CLH 队列的末端。当持有锁的线程释放锁之后，会唤醒其后继节点，这个后继节点就可以开始尝试获取锁。")])]),a._v(" "),t("h2",{attrs:{id:"_04-原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-原理"}},[a._v("#")]),a._v(" 04 原理")]),a._v(" "),t("h3",{attrs:{id:"juc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#juc"}},[a._v("#")]),a._v(" JUC")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Lock 框架（locks 包）")])]),a._v(" "),t("li",[t("p",[a._v("原子类 （atomic 包）")])]),a._v(" "),t("li",[t("p",[a._v("并发集合")])]),a._v(" "),t("li",[t("p",[a._v("线程池")])]),a._v(" "),t("li",[t("p",[a._v("工具类")]),a._v(" "),t("p",[t("code",[a._v("CountDownLatch")])]),a._v(" "),t("p",[t("code",[a._v("CyclicBarrier")])]),a._v(" "),t("p",[t("code",[a._v("Semaphore")])]),a._v(" "),t("p",[t("code",[a._v("Exchanger")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("ThreadLocal")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);