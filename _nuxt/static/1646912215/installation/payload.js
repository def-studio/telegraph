__NUXT_JSONP__("/installation", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{document:{slug:"installation",description:C,title:"Installation & Configuration",menuTitle:"Installation",position:p,fullscreen:true,toc:[{id:D,depth:p,text:E},{id:F,depth:p,text:G},{id:H,depth:p,text:I}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"You can install the package via composer:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"composer"}]},{type:a,value:" require defstudio\u002Ftelegraph\n"}]}]}]},{type:a,value:e},{type:b,tag:t,props:{id:D},children:[{type:b,tag:r,props:{href:"#set-up",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:E}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"In order to work, Telegraph needs you to run its migrations:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:m,props:{},children:[{type:a,value:J},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"telegraph-migrations\""}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"php artisan migrate\n"}]}]}]},{type:a,value:e},{type:b,tag:t,props:{id:F},children:[{type:b,tag:r,props:{href:"#configuration",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:G}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"You can publish the config file with:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,q]},children:[{type:b,tag:m,props:{},children:[{type:a,value:J},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"telegraph-config\""}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"here's an example of what you'll find:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,"language-php"]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"return"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F*\n     * Sets Telegraph messages default parse mode\n     * allowed values: html|markdown\n     *\u002F"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,o,z]},children:[{type:a,value:"'default_parse_mode'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:N},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"PARSE_HTML"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F*\n     * Sets the handler to be used when Telegraph\n     * receives a new webhook call.\n     *\n     * For reference, see https:\u002F\u002Fdef-studio.github.io\u002Ftelegraph\u002Fwebhooks\u002Foverview\n     *\u002F"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,o,z]},children:[{type:a,value:"'webhook_handler'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:"EmptyWebhookHandler"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F*\n     * If enabled, Telegraph dumps received\n     * webhook messages to logs\n     *\u002F"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,o,z]},children:[{type:a,value:"'debug_mode'"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,P,"boolean"]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:";"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:t,props:{id:H},children:[{type:b,tag:r,props:{href:"#new-bot-creation",ariaHidden:u,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"In order to interact with Telegram, a new bot should be created and associated with a Telegram bot. Follow the  "},{type:b,tag:r,props:{href:"quickstart\u002Fnew-bot"},children:[{type:a,value:"quickstart guide"}]},{type:a,value:" for an overview of this."}]}]},dir:"\u002Fen",path:"\u002Fen\u002Finstallation",extension:".md",createdAt:R,updatedAt:R,to:"\u002Finstallation",category:C},prev:{title:N,path:"\u002Fen\u002Findex",to:"\u002F"},next:{title:"Questions and Issues",path:"\u002Fen\u002Fissues",to:"\u002Fissues"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation"," ","p","div","nuxt-content-highlight","pre","line-numbers","code","operator","string",2,"language-bash","a","\n    ","h2","true",-1,"icon","icon-link","comment","single-quoted-string","=\u003E",",","","set-up","Set up","configuration","Configuration","new-bot-creation","New bot creation","php artisan vendor:publish --tag","=","keyword","scope","Telegraph","::","constant","\n\n    ","2022-03-10T11:35:38.558Z")));