# 사용할 베이스 이미지                                                           
FROM node:14                                                                                                                                                         
                                                                                 
# 앱 종속성 설치를 위해 복사                                                     
COPY package*.json ./                                                            
                                                                                 
# 앱 소스 복사                                                                   
COPY ./ ./                                                                       
                                                                                 
# 컨테이너에서 사용할 포트 노출                                                  
EXPOSE 3000                                                                      
                                                                                 
# 앱 실행                                                                        
CMD ["node", "main.js"]
