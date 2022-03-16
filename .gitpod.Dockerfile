FROM gitpod/workspace-full

#local user
USER gitpod
  
ENV SHELL=zsh
ENV ZSH_THEME cloud
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
