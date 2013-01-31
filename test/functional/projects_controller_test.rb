require 'test_helper'

class ProjectsControllerTest < ActionController::TestCase
  test "should get cashier" do
    get :cashier
    assert_response :success
  end

  test "should get cuttingboard" do
    get :cuttingboard
    assert_response :success
  end

  test "should get elevator" do
    get :elevator
    assert_response :success
  end

  test "should get pcr" do
    get :pcr
    assert_response :success
  end

  test "should get youmote" do
    get :youmote
    assert_response :success
  end

  test "should get bphotography" do
    get :bphotography
    assert_response :success
  end

end
