defmodule ChatTest.PageController do
  use ChatTest.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
