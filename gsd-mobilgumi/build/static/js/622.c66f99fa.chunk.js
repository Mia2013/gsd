"use strict";(self.webpackChunkgsd_mobilgumi=self.webpackChunkgsd_mobilgumi||[]).push([[622],{2578:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(6446),n=a(5865),l=a(579);function i(e){let{title:t,id:a,color:i="text.primary"}=e;return(0,l.jsx)(r.A,{sx:{display:"flex",alignItems:"center",flexDirection:"column",my:8},children:(0,l.jsx)(n.A,{variant:"h4",sx:{textTransform:"uppercase",fontWeight:"bolder",color:i},className:"title","data-aos":"fade-up",children:t})})}},3622:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var r=a(5043),n=a(6446),l=a(9252),i=a(8903),s=a(2578),m=a(5865),o=a(8230),d=a(8577),c=a(3217),x=a(1906),u=a(1386),p=a(5678),h=a(4858),j=a(8403),f=a(899);const y={empty:"K\xe9rem \xedrja be a nev\xe9t"},b={empty:"K\xe9rem \xedrja be az e-mail c\xedm\xe9t",notEmail:"Nem megfelel\u0151 e-mail form\xe1tum"},g={empty:"K\xe9rem \xedrja be a telefonsz\xe1m\xe1t",minLength:"A telefonsz\xe1mnak legal\xe1bb 6 karakter hossz\xfanak kell lennie"},A={empty:"K\xe9rem ne hagyja \xfcresen az \xfczenet mez\u0151t"},v={empty:"K\xe9rem \xedrja be a c\xedm\xe9t"},k={empty:"K\xe9rem fogadja el az adatv\xe9delmi t\xe1j\xe9koztat\xf3t"},z=f.Ik().shape({name:f.Yj().required(y.empty),email:f.Yj().email(b.notEmail).required(b.empty),phoneNumber:f.Yj().min(6,g.minLength).required(g.empty),address:f.Yj().required(v.empty),message:f.Yj().required(A.empty),gdpr:f.zM().oneOf([!0],k.empty).required(k.empty)});var E=a(6213),K=a(579);function S(e){let{styles:t}=e;const[a,l]=(0,r.useState)(""),{register:i,reset:s,handleSubmit:f,watch:y,formState:{errors:b}}=(0,h.mN)({resolver:(0,j.t)(z),reValidateMode:"onChange"});return(0,K.jsx)(n.A,{"data-aos":"zoom-in",sx:{mb:4,p:4,mx:"auto",maxWidth:{xs:"90%",md:"100%"},backgroundColor:"rgba(255, 255, 255, 0.8)",width:" 100%",borderRadius:"25px",margin:"20px",boxShadow:"0px 5px 10px 0px rgba(0, 0, 0, 0.6)"},children:(0,K.jsxs)(n.A,{display:"flex",justifyContent:"center",flexDirection:"column",children:[(0,K.jsx)(m.A,{variant:"h6",color:"primary",sx:{mb:4,textAlign:"center",textTransform:"uppercase",fontWeight:"bolder"},children:"Aj\xe1nlatk\xe9r\xe9s"}),(0,K.jsx)("form",{onSubmit:f((async e=>{const t="".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URI,"/contact");try{if(200!==(await E.A.post(t,e)).status)throw new Error;l({severity:"success",text:"Kedves ".concat(e.name,"! K\xf6sz\xf6nj\xfck az \xe9rdekl\u0151d\xe9st, az \xfczenet\xe9t megkaptuk.")}),s()}catch(a){l({severity:"error",text:"Kedves ".concat(e.name,"! Sajnos valami hiba t\xf6rt\xe9nt, pr\xf3b\xe1lja meg \xfajra. Ha ism\xe9t prob\xe9lma ad\xf3dik, akkor k\xe9rem h\xedvjon telefonon vagy \xedrjon e-mailt.")})}})),noValidate:!0,children:(0,K.jsxs)(n.A,{display:"flex",justifyContent:"center",flexDirection:"column",gap:3,children:[(0,K.jsx)(o.A,{id:"outlined-name",placeholder:"N\xe9v",name:"name",label:"N\xe9v",required:!0,...i("name"),fullWidth:!0}),(0,K.jsx)(o.A,{id:"outlined-name",label:"E-mail c\xedm",placeholder:"E-mail c\xedm",name:"email",required:!0,...i("email"),fullWidth:!0}),(0,K.jsx)(o.A,{id:"outlined-name",label:"Telefonsz\xe1m",placeholder:"Telefonsz\xe1m",name:"phoneNumber",required:!0,...i("phoneNumber"),fullWidth:!0}),(0,K.jsx)(o.A,{id:"outlined-name",label:"C\xedm (telep\xfcl\xe9s, utca)",placeholder:"Telefonsz\xe1m",name:"address",required:!0,...i("address"),fullWidth:!0}),(0,K.jsx)(o.A,{id:"outlined-name",label:"\xdczenet",placeholder:"\xdczenet",name:"message",required:!0,...i("message"),multiline:!0,minRows:3,maxRows:7,fullWidth:!0}),(0,K.jsx)(d.A,{fullWidth:!0,control:(0,K.jsx)(c.A,{name:"gdpr",required:!0,...i("gdpr"),style:{color:b.gdpr?"#d32f2f":"initial"},value:y("gdpr")}),label:(0,K.jsx)(K.Fragment,{children:(0,K.jsxs)(m.A,{variant:"body1",children:["Elolvastam \xe9s meg\xe9rtettem az",(0,K.jsx)(m.A,{sx:{m:1},component:"a",variant:"body1",href:"/adatvedelem",children:"Adatv\xe9delmi t\xe1j\xe9koztat\xf3ban"}),"foglaltakat"]})})}),(0,K.jsx)(x.A,{type:"submit",variant:"contained",sx:{borderRadius:"30px",py:1,px:3},endIcon:(0,K.jsx)(p.A,{}),children:"K\xfcld\xe9s"})]})}),a&&(0,K.jsxs)(u.A,{severity:a.severity,children:[a.text," "]})]})})}function C(){return(0,K.jsx)(n.A,{sx:{py:5,mx:"auto",backgroundColor:"#262626"},children:(0,K.jsx)(l.A,{maxWidth:"lg",id:"contact",children:(0,K.jsxs)(i.Ay,{container:!0,children:[(0,K.jsx)(i.Ay,{item:!0,xs:12,sx:{textAlign:"center"},children:(0,K.jsx)(s.A,{title:"Kapcsolat",color:"text.secondary"})}),(0,K.jsx)(i.Ay,{item:12,md:6,children:(0,K.jsx)(S,{})})]})})})}}}]);
//# sourceMappingURL=622.c66f99fa.chunk.js.map