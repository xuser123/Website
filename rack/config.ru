class Application
	def call(env)
		status	= 200
		headers	= { "Content-Type" => "text/html" }
		body	= ["Yay, jumis first web application! <3"]

		[status, headers, body]
	end
end

run Application.new
