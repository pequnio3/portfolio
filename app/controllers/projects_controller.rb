class ProjectsController < ApplicationController
  def cashier
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def cuttingboard
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def elevator
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def pcr
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def youmote
    if request.headers['X-PJAX']
      render :layout => false
    end
  end

  def bphotography
    if request.headers['X-PJAX']
      render :layout => false
    end
  end
end
