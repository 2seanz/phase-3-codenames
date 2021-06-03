class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/test/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => "test response!"}.to_json ]]

    elsif req.path.match(/words/) && req.get?
      rake db:seed
      return [200, { 'Content-Type' => 'application/json' }, [ Word.all.to_json ]]

    elsif req.path.match(/team/) && req.get?
      return [200, { 'Content-Type' => 'application/json' }, [ Team.all.to_json ]]

    elsif req.path.match(/words/) && req.patch?
      word_hash = JSON.parse(req.body.read)
      id = req.path.split("/").last
      found_team = Word.find(id)

      # update word we found
      found_team.update(word_hash)
      return [200, { 'Content-Type' => 'application/json' }, [ found_team.to_json ]]
    
    else
      resp.write "Path Not Found"

    end

    resp.finish
  end

end
