import execjs
import re
import requests

myget = requests.session()
hedaer = {}

# url = "http://wenshu.court.gov.cn/"
# url_dfe1675 = "http://wenshu.court.gov.cn/gGK4jBsBBszn/c3aqs9gktfr4.dfe1675.js"
url = "http://wenshu.court.gov.cn/website/wenshu/181217BMTKHNT2W0/index.html?pageId=5dada12c3bddd85e024547c3ccd7d537&s8=03"
url_dfe1675 = "http://wenshu.court.gov.cn/gGK4jBsBBszn/lTLEbJdQ3z4q.dfe1675.js"
headers = {
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-CN,zh;q=0.9',
}
# 访问首页
response = myget.request("GET", url, headers=headers)
# 获取初始化cookie
cookie_HM4hUBT0dDOn80S = response.cookies.get_dict()

headers_dfe1675 = {
    'Connection': 'keep-al  ive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    'Accept': '*/*',
    'Referer': 'http://wenshu.court.gov.cn/',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Host': 'wenshu.court.gov.cn',
    'Cookie': '%s=%s' % ('HM4hUBT0dDOn80S', cookie_HM4hUBT0dDOn80S['HM4hUBT0dDOn80S'])
}
# 拿到相对应的的 dfe1675_js js
dfe1675_js = myget.request('GET', url_dfe1675, headers=headers_dfe1675)
html = response.text
print(html)
# 获取meta对象以及后面的html_js
get_meta_and_htmljs = re.findall('(<meta content=".*?)</script></head>', html, re.S)
# 拿到匹配出html_js
html_js = re.findall('<script type="text/javascript" r="m">(.*)', get_meta_and_htmljs[0])
# 准备替换的字符串
get_eval_js = ''

# 匹配出需要替换的字符
replay_ret = re.findall('ret=.{,21}', html_js[0])

# 需要替换的 js正行代码
call_function = ''
# 需要获取变量的名称
call_name = ''

# 因为匹配到两个相同的获取带call的那个
for r in replay_ret:
    if 'call' in r:
        call_function = r
        # 匹配生成eval_js 代码的变量
        call_name = re.findall('\(.*,(.*)\)', call_function)[0]
# 替换正行
html_js = html_js[0].replace(call_function, 'window.ret=%s' % call_name)
# 获取meta
meta = re.findall('(.*?)<!--\[if lt IE 9]>', get_meta_and_htmljs[0])

# 打开需要拼接的的头
with open('cookie_hand2.js', 'r') as cookie_head_f:
    cookie_head = cookie_head_f.read()

# 替换meta content
meta_content = re.findall('<meta content=(.*)>', meta[0])
add_head = cookie_head.replace('%mate_content', meta_content[0])

# 替换ts函数
add_ts = add_head.replace('%$_ts', dfe1675_js.text)

# 删除ret不然报错
# html_js = html_js.replace('return ret;', '')
# 添加上获取eval的_js
html_js = html_js + '\n' + get_eval_js
# 添加好cookie头已经替换的js
html_js = add_ts + '\n' + html_js
# 调用

eval = execjs.compile(html_js.encode('utf-8').decode('gbk'))
# with open('test10.js', 'w', encoding='gbk') as f:
#     f.write(html_js.encode('utf-8').decode('gbk'))
# 根据函数获取值
eval_js = eval.eval('window.ret')
# # 根据变量获取值
# # function_js = eval.call('get_e')
# # print(function_js)
# # 保存整体的征程eval的整体js以便测试
# with open('wenshu_js4.js', 'w', encoding='utf-8') as f:
#     f.write(html_js)
complete_js = html_js.replace('window.ret=%s' % call_name, 'ret=%s' % eval_js)
with open('new_cookie4.js', 'w', encoding='gbk') as f:
    f.write(complete_js.encode('utf-8').decode('gbk'))
# html_jiance = re.findall('\'on\'\+.{0,5}(.{,33})}}', complete_js, re.S)[0]
# run_js = complete_js.replace(html_jiance, '')
eval = execjs.compile(complete_js.encode('utf-8').decode('gbk'))
#
#
HM4hUBT0dDOn80T = eval.eval('document.cookie')
HM4hUBT0dDOn80Tx = re.findall('HM4hUBT0dDOn80T=(.*); path=', HM4hUBT0dDOn80T)[0]
headers_xx = {
    'Proxy-Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Cache-Control': 'no-cache',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cookie': 'HM4hUBT0dDOn80S=%s; HM4hUBT0dDOn80T=%s' % (
        cookie_HM4hUBT0dDOn80S['HM4hUBT0dDOn80S'], HM4hUBT0dDOn80Tx)
}

print(headers)
response_two = myget.request("GET", url, headers=headers_xx)
print(response_two)
