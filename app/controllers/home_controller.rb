class HomeController < ApplicationController
  def about
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def home
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def projects
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def work
    if request.headers['X-PJAX']
      render :layout => false
    end
  end
end
