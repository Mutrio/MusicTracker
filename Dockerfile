 1 # 사용할 베이스 이미지                                                                                                                                             2 FROM node:14                                                                     
 3                                                                                  
 4 # 앱 종속성 설치를 위해 복사                                                     
 5 COPY package*.json ./                                                            
 6                                                                                  
 7 # 앱 소스 복사                                                                   
 8 COPY ./ ./                                                                       
 9                                                                                  
10 # 컨테이너에서 사용할 포트 노출                                                  
11 EXPOSE 3000                                                                      
12                                                                                  
13 # 앱 실행                                                                        
14 CMD ["node", "main.js"]
