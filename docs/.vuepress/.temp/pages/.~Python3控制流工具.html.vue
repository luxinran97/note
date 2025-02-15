<template><div><h2 id="_1-if语句" tabindex="-1"><a class="header-anchor" href="#_1-if语句"><span>1.  if语句</span></a></h2>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line"><span class="token keyword">if</span> 判断条件<span class="token number">1</span><span class="token punctuation">:</span></span>
<span class="line">    执行语句<span class="token number">1</span>……</span>
<span class="line"><span class="token keyword">elif</span> 判断条件<span class="token number">2</span><span class="token punctuation">:</span></span>
<span class="line">    执行语句<span class="token number">2</span>……</span>
<span class="line"><span class="token keyword">elif</span> 判断条件<span class="token number">3</span><span class="token punctuation">:</span></span>
<span class="line">    执行语句<span class="token number">3</span>……</span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">    执行语句<span class="token number">4</span>……</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>可有零个或多个 <a href="https://docs.python.org/zh-cn/3/reference/compound_stmts.html#elif" target="_blank" rel="noopener noreferrer"><code v-pre>elif</code></a> 部分，<a href="https://docs.python.org/zh-cn/3/reference/compound_stmts.html#else" target="_blank" rel="noopener noreferrer"><code v-pre>else</code></a> 部分也是可选的。关键字 '<code v-pre>elif</code>' 是 'else if' 的缩写，用于避免过多的缩进。python中没有switch或case语句</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入数字："</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"负数"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">elif</span> x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"zreo"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正数"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-for语句" tabindex="-1"><a class="header-anchor" href="#_2-for语句"><span>2. for语句</span></a></h2>
<blockquote>
<p>注意：python中并不能迭代算数递增，或者控制迭代步骤或者结束条件，如：</p>
<p><code v-pre>for (int i = 0; i &lt; 10; i++)</code> ,只能在列表或字符串等任意序列的元素上迭代，按它们在序列中出现的顺序。</p>
</blockquote>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre v-pre><code><span class="line">words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'cat'</span><span class="token punctuation">,</span> <span class="token string">'window'</span><span class="token punctuation">,</span> <span class="token string">'defenestrate'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> w <span class="token keyword">in</span> words<span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


